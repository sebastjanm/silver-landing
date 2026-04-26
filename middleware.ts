import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect .html suffixes → clean URLs (safety net for legacy backlinks)
  if (pathname.endsWith(".html")) {
    const cleanPath = pathname.replace(/\.html$/, "");
    return NextResponse.redirect(new URL(cleanPath, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match paths that might have .html suffix
    "/((?!_next|api|_vercel|favicon.ico).*)",
  ],
};
