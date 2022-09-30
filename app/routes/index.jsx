import { Link, useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";
import { getGuitarras } from "~/models/guitarras.server";
import Post from "../components/post";
import stylesGuitarra from "../styles/tienda.css";
import stylesBlogs from "../styles/blogs.css";
import stylesCurso from "../styles/curso.css";
import Guitarra from "~/components/guitarra";
import { getCurso } from "~/models/curso.server";
import Curso from "~/components/curso";

export async function loader() {
  const [guitarras, blogs, curso] = await Promise.all([
    getGuitarras(),
    getBlogs(),
    getCurso(),
  ]);

  return {
    guitarras: guitarras.data,
    blogs: blogs.data,
    curso: curso.data,
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesBlogs,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
    {
      rel: "stylesheet",
      href: stylesGuitarra,
    },
  ];
}

export function meta() {
  return {
    title: "Guitar LA ",
    description: "Nuestra página principal",
  };
}

export default function Index() {
  const { guitarras, blogs, curso } = useLoaderData();

  return (
    <>
      {/* TIENDA */}
      <main>
        <h3 className="heading">Nuestra Colección</h3>
        <section className=" guitarra-container">
          {guitarras.map((guitarra) => {
            return (
              <Guitarra
                key={guitarra.attributes.url}
                guitarra={guitarra.attributes}
              />
            );
          })}
        </section>
      </main>
      {/* Curso*/}
      <Curso curso={curso.attributes} />

      {/* BLOGS */}

      <main>
        <h3 className="heading">Blog</h3>
        <section className="contenedor container-blogs">
          {blogs.map((blog) => {
            return <Post key={blog.id} blog={blog.attributes} />;
          })}
        </section>
      </main>
    </>
  );
}
