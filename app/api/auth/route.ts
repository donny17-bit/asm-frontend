// app/api/route.js

import { NextResponse } from "next/server";
import axios from "@/app/utils/axios";
import { cookies } from "next/headers";
// import { setCookie } from "cookies-next"; --> ga kepake, nnti di uninstall

// To handle a POST request to /api
export async function POST(request: any) {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");
  const form = await request.json();

  console.log(sessionCookie);

  // const res = new NextResponse();

  var headersValue: any;

  if (sessionCookie == undefined) {
    headersValue = {};
  } else {
    headersValue = { Cookie: `session=${sessionCookie.value}` };
  }

  try {
    const result = await axios.post("/api/login", form, {
      headers: headersValue,
    });

    const session = result.headers["set-cookie"]?.[0];

    // Ensure session is defined before proceeding
    if (session) {
      const sessionCookieParts = session.split(";");
      const sessionNamePart = sessionCookieParts[0].split("session=");

      var httpOnly = undefined;
      if (sessionCookieParts[3] != undefined) {
        httpOnly = true;
      } else {
        httpOnly = false;
      }

      cookies().set({
        name: "session",
        value: sessionNamePart[1],
        expires: new Date(sessionCookieParts[1]),
        httpOnly: httpOnly,
        path: "/",
        maxAge: parseInt(sessionCookieParts[2]),
      });
    } else {
      return;
    }

    return NextResponse.json({ data: result.data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: error.response.data },
      { status: error.response.data.status }
    );
  }
}
