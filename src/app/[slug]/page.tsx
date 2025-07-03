// src/app/[slug]/page.tsx
import { PortableText } from '@portabletext/react'
import { groq } from 'next-sanity'
import { client } from '@/sanity/client'
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.slug,
  }
}

export default async function PostPage({ params }: Props) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt
  }`

  const post = await client.fetch(query, { slug: params.slug })

  return (
    <article className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-10">{new Date(post.publishedAt).toDateString()}</p>
      <div className="prose prose-lg">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}
