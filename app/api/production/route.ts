// app/api/route.js

import { NextResponse } from "next/server";
import axios from "@/app/utils/axios";
import { cookies } from "next/headers";

export async function GET(request: any) {
  const url = new URL(request.url);
  const searchParam = new URLSearchParams(url.searchParams);
  const ldcId = searchParam.get("ldc_id");
  const beginDate = searchParam.get("begin_date");
  const endDate = searchParam.get("end_date");

  console.log(beginDate);
  console.log(endDate);

  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");

  var headersValue: any;

  if (sessionCookie == undefined) {
    headersValue = {};
  } else {
    headersValue = { Cookie: `session=${sessionCookie.value}` };
  }

  try {
    const result = await axios.get(
      `/api/production-longterm?ldc_id=125&page=1&page_size=10&sort=asc&order=thnbln, client_name&begin_date=${beginDate}&end_date=${endDate}`,
      {
        headers: headersValue,
      }
    );

    // console.log(result);

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
