import { notFound } from "next/navigation";
import { getBlogById } from "../../services/blogs";
import { incrementLikes } from "@/app/actions/blogs";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = getBlogById(Number(id));

  if (!blog) {
    return notFound();
  }

  return (
    <>
      <h1>Title: {blog.title}</h1>
      <h2>Author: {blog.author}</h2>
      <p>
        Url: <a href={blog.url}>{blog.url}</a>
      </p>
      <p>Likes: {blog.likes}</p>
      <form action={incrementLikes}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">Like post</button>
      </form>
    </>
  );
};

export default BlogPage;
