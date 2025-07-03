import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(`*[_type == "post" && defined(slug.current)].slug.current`);
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title, body, publishedAt
  }`;

  const post = await client.fetch(query, { slug: params.slug });

  if (!post) return notFound();

  return (
    <main className="prose prose-neutral dark:prose-invert mx-auto p-8">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">
        公開日: {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <PortableText value={post.body} />
    </main>
  );
}
