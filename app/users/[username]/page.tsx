import { getUserWithBlogs } from "@/app/services/users";

const UserPageDetailed = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;
  const decodedUsername = decodeURIComponent(username);
  const user = await getUserWithBlogs(decodedUsername);

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>Username: {user?.username}</p>
      <h3>Notes</h3>
      <ul>
        {user?.blogs.map((blog) => (
          <li key={blog.id}>
            <p>Title: {blog.title}</p>
            <p>Author: {blog.author}</p>
            <p>Link: {blog.url}</p>
            <p>Likes: {blog.likes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPageDetailed;
