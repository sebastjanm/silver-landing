import { NextRequest, NextResponse } from "next/server";
import { withApiAuth } from "@/lib/auth";
import { createPost } from "@/lib/blog/actions";
import { createPostHtmlSchema } from "@/lib/blog/schemas";

/** POST /api/blog-html — Create post with HTML content. Bearer auth. */
export async function POST(request: NextRequest) {
  const authError = withApiAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const parsed = createPostHtmlSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const post = await createPost(parsed.data);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
