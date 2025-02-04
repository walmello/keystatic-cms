// Outputs: /builtwith.json

import { getCollection, getEntry } from 'astro:content';

// Generate static pages
export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.map(post => ({ params: { slug: post.slug } }));
}

export async function GET({params, request}) {
  const slug = params.slug
  const posts = await getCollection('posts');
  const post = posts.filter(post => post.slug == slug)[0]
  return new Response(
    JSON.stringify(post, null, 2)
  )
}