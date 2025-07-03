import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-[var(--foreground)] to-[var(--secondary)] bg-clip-text text-transparent">
          📝 Posted Notes
        </h1>
        <p className="text-[var(--secondary)]">A collection of my latest thoughts and insights.</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 px-6 bg-[var(--card-background)] rounded-lg shadow-inner border border-[var(--border-color)]">
          <p className="text-lg text-[var(--secondary)]">There are no posts yet! Add one in Sanity Studio 💡</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/${post.slug.current}`}
              className="group block bg-[var(--card-background)] rounded-lg shadow-[var(--card-shadow)] hover:shadow-xl transition-shadow duration-300 border border-[var(--border-color)] overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-5">
                <h2 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--secondary)] mt-2">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className="px-5 py-3 bg-[var(--background)] border-t border-[var(--border-color)]">
                <span className="text-sm font-medium text-[var(--primary)] group-hover:underline">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
