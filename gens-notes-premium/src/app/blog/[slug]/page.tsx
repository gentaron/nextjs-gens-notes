import PostContent from "./PostContent";

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <section className="py-16 px-4">
      <PostContent slug={params.slug} />
    </section>
  );
}