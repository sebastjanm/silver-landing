import { NextRequest, NextResponse } from "next/server";

/** Validate Bearer token against API_SECRET_KEY env var. */
export function withApiAuth(
  request: NextRequest
): NextResponse | null {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Missing or invalid Authorization header" },
      { status: 401 }
    );
  }

  const token = authHeader.slice(7);
  if (token !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ error: "Invalid API key" }, { status: 403 });
  }

  return null; // Auth passed
}
