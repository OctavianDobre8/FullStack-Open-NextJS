import { getBlogs } from "../services/blogs";

export default function Blogs() {
  const blogs = getBlogs();

  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <ul>
        {sortedBlogs.map((blog) => (
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
      </ul>
    </div>
  );
}
