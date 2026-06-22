import { getUsers } from "../services/users";

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <a href={`/users/${user.name}`}>Name: {user.name}</a>
        </div>
      ))}
    </>
  );
}
