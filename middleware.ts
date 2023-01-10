import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.get("TRAX_ACCESS_TOKEN");
    if (!token) {
      const loginUrl = new URL("/signin", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }
}
