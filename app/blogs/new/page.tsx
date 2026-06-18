import { createBlog } from "@/app/actions/blogs";

export default function CreateNewBlog() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Create a new blog</h1>

      <form action={createBlog} className="flex flex-col gap-6 max-w-md">
        <label className="flex flex-col gap-2">
          <span>Title</span>
          <input
            type="text"
            name="title"
            required
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>Author</span>
          <input
            type="text"
            name="author"
            required
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>URL</span>
          <input
            type="text"
            name="url"
            required
            className="border p-2 rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 cursor-pointer"
        >
          Create new blog
        </button>
      </form>
    </main>
  );
}
