import { useLoaderData } from "@remix-run/react";
import React from "react";
import { getBlogs } from "~/models/blog.server";
import Post from "../components/post";
import styles from "../styles/blogs.css";

export async function loader() {
  const respuesta = await getBlogs();
  return respuesta.data;
}

export function meta() {
  return {
    title: "Guitar LA - BLOG",
    description: "Nuestro blog",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <main>
      <h3 className="heading">Blog</h3>
      <div className="contenedor container-blogs">
        {blogs.map((blog) => {
          return <Post key={blog.id} blog={blog.attributes} />;
        })}
      </div>
    </main>
  );
};

export default Blog;
