import { PortableText } from '@portabletext/react'
import { createClient } from 'next-sanity'

// Sanity クライアント設定（あなたの projectId に合わせてね）
const client = createClient({
  projectId: 'あなたのProjectID', // 例: 'abc123xy'
  dataset: 'production',
  apiVersion: '2023-07-01',
  useCdn: false,
})

async function fetchSanityPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt
  }`
  const params = { slug }
  return await client.fetch(query, params)
}

type Props = {
  params: {
    slug: string
  }
}

const PostPage = async ({ params }: Props) => {
  const post = await fetchSanityPost(params.slug)

  if (!post) {
    return <div>投稿が見つかりませんでした😢</div>
  }

  return (
    <article className="prose mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        公開日: {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <PortableText value={post.body} />
    </article>
  )
}

export default PostPage
