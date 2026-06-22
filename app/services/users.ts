import { db } from "@/db";

export const getUsers = () => {
  return db.query.users.findMany();
};
