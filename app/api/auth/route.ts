// app/api/route.js

import { NextResponse } from "next/server";
import axios from "@/app/utils/axios";
// import { cookies } from "next/headers";
import { setCookie } from "cookies-next";

// To handle a GET request to /api
export async function GET(request: any) {
  // Do whatever you want

  // await axios.post("http://127.0.0.1:8080/api/login", form);
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: any) {
  const res = new NextResponse();

  // Do whatever you want
  const form = await request.json();

  const result = await axios.post("http://127.0.0.1:8080/api/login", form);

  const session = result.headers["set-cookie"]?.[0];
  // Ensure session is defined before proceeding
  if (session) {
    var sessionCookieParts = session.split(";");
    var sessionNamePart = sessionCookieParts[0].split("session=");
    // Proceed with further processing
  } else {
    return;
  }

  setCookie("session", sessionNamePart[1], {
    res,
    expires: new Date(sessionCookieParts[1]),
    maxAge: parseInt(sessionCookieParts[2]),
  });

  return res;
  // return NextResponse.json({ data: result.data }, { status: 200 });
}
