import { NextRequest, NextResponse } from "next/server";
import { withApiAuth } from "@/lib/auth";
import {
  getPublishedPosts,
  createPost,
  updatePost,
  deletePost,
} from "@/lib/blog/actions";
import {
  createPostHtmlSchema,
  updatePostSchema,
  deletePostSchema,
} from "@/lib/blog/schemas";

/** GET /api/blog — List all published posts (camelCase JSON). No auth. */
export async function GET() {
  try {
    const posts = await getPublishedPosts();
    return NextResponse.json(posts);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/** POST /api/blog — Create post (Markdown content accepted as HTML). Bearer auth. */
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

/** PUT /api/blog — Update post. Auto-publishes if is_published: true. Bearer auth. */
export async function PUT(request: NextRequest) {
  const authError = withApiAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const parsed = updatePostSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { id, ...data } = parsed.data;
    const post = await updatePost(id, data);
    return NextResponse.json(post);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/** DELETE /api/blog — Delete post. Bearer auth. */
export async function DELETE(request: NextRequest) {
  const authError = withApiAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const parsed = deletePostSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await deletePost(parsed.data.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
