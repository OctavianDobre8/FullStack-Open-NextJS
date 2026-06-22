import { pgTable, serial, text, boolean, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  name: text("name").notNull(),
});

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull().unique(),
  author: text("author").notNull(),
  url: text("url"),
  likes: integer("likes").default(0),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});
