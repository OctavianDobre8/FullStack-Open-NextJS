const blogs = [
  {
    id: 1,
    title: "Octavs blog",
    author: "Georgel",
    url: "https://dummy.com",
    likes: 21,
  },
  {
    id: 2,
    title: "Mihais blog",
    author: "Mihai",
    url: "https://dummy3.com",
    likes: 231,
  },
  {
    id: 3,
    title: "Georges blog",
    author: "George",
    url: "https://dummy2.com",
    likes: 345,
  },
  {
    id: 4,
    title: "Eleiko blog",
    author: "Eleiko",
    url: "https://dummy1.com",
    likes: 1,
  },
];

let nextId = 5;

export const getBlogs = () => {
  return blogs;
};

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id);
};

export const incrementLikesById = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id);
  if (blog) blog.likes++;
};

export const searchBlog = (searchTerm: string) => {
  return blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};

export const addBlog = (title: string, author: string, url: string) => {
  blogs.push({ id: nextId++, title, author, url, likes: 0 });
};
