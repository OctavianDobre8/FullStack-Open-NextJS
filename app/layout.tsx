import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <nav>
          <Link href={"/"}>home</Link>
          {" | "}
          <Link href={"/blogs"}>blogs</Link>
          {" | "}
          <Link href={"/blogs/new"}>create a new blog</Link>
          {" | "}
          <Link href={"/blogs/search"}>search</Link>
          {" | "}
          <Link href={"/users"}>users</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
