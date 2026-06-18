"use server";

import { revalidatePath } from "next/cache";
import { addBlog, incrementLikesById } from "../services/blogs";
import { redirect } from "next/navigation";

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const url = formData.get("url") as string;
  addBlog(title, author, url);
  revalidatePath("/blogs");
  redirect("/blogs");
};

export const incrementLikes = async (formData: FormData) => {
  const likedId = formData.get("id");
  incrementLikesById(Number(likedId));
  revalidatePath(`/blogs/${likedId}`);
  revalidatePath("/blogs");
};
