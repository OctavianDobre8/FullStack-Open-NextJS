import { getBlogs, searchBlog } from "@/app/services/blogs";

export default async function BlogsSearched({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;
  const allBlogs = getBlogs();
  const blogs = filter ? searchBlog(filter) : allBlogs;

  return (
    <div>
      <h2>Blogs</h2>
      <form method="GET">
        <input name="filter" type="text" defaultValue={filter} />
        <button type="submit">Search</button>
      </form>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <div>
            <p>Title: {blog.title}</p>
            <p>Author: {blog.author}</p>
            <p>
              Link: <a href={blog.url}>read it</a>
            </p>
            <p>Likes: {blog.likes}</p>
          </div>
        </li>
      ))}
    </div>
  );
}
