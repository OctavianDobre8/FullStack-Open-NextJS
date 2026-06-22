import { getUsers } from "../services/users";

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <a href={`/users/${user.username}`}>Username: {user.username}</a>
          <p>Name: {user.name}</p>
        </div>
      ))}
    </>
  );
}
