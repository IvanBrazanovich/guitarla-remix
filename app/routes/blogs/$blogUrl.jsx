import { Link, useLoaderData } from "@remix-run/react";
import { transformDate } from "../../helpers/helpers";
import React from "react";
import { getBlog } from "~/models/blog.server";
import styles from "../../styles/blogs.css";

export async function loader({ params }) {
  console.log(params);
  const blog = await getBlog(params.blogUrl);
  if (blog.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Blog no encontrada",
    });
  }
  return blog.data;
}
export function meta({ data }) {
  if (!data) {
    return {
      title: `Guitar LA - Entrada no encontrada`,
      description: `Guitarra no encontrada`,
    };
  }

  return {
    title: `Guitar LA - ${data[0].attributes.titulo}`,
    description: `Ver más información de la guitarra ${data[0].attributes.titulo} `,
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

const Post = () => {
  const blog = useLoaderData();

  console.log(blog);
  const { titulo, createdAt, content, imagen } = blog[0].attributes;

  const fecha = transformDate(createdAt);

  return (
    <main className="blog mt-3">
      <div className="img-wrap">
        <img src={imagen?.data.attributes.url} alt="" />
      </div>
      <div className="container-info">
        <h3 className="titulo"> {titulo}</h3>
        <p className="fecha">{fecha}</p>
        <p className="texto">{content}</p>
      </div>
    </main>
  );
};

export default Post;
