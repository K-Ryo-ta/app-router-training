import Link from 'next/link'
import type { Database } from '@/database.types'

type Blog = Database['public']['Tables']['blogs']['Row']

async function fetchBlogs() {
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      apiKey: `${process.env.apikey as string}`,
    }),
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const blogs: Blog[] = await res.json()
  return blogs
}

const BlogListStatic = async () => {
  const blogs = await fetchBlogs()
  return (
    <div className="p-4">
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blog
      </p>
      {blogs.map((blog) => (
        <li key={blog.id} className="my-1 text-base">
          <Link prefetch={false} href={`/blogs/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  )
}

export default BlogListStatic
