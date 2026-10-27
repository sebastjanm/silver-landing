import type { Metadata } from "next";
import { getPublishedPosts } from "@/lib/blog/actions";
import { BlogContent } from "@/components/BlogContent";

export const revalidate = 300; // ISR: 5 minutes

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Novice in analize s trga plemenitih kovin. Spremljajte gibanje cen srebra in zlata.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="border-b border-border py-16 text-center">
        <h1 className="font-serif text-5xl text-navy">Blog</h1>
        <p className="mt-3 text-lg text-text-muted">
          Novice in analize s trga plemenitih kovin
        </p>
      </div>
      <div className="py-16">
        <BlogContent posts={posts} />
      </div>
    </main>
  );
}
