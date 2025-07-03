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
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          📝 Posted Notes
        </h1>
        <p className="text-gray-500">A collection of my latest thoughts and insights.</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 px-6 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-lg text-gray-600">There are no posts yet! Add one in Sanity Studio 💡</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/${post.slug.current}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200/80 overflow-hidden"
            >
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-200/80">
                <span className="text-sm font-medium text-blue-600 group-hover:underline">
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
