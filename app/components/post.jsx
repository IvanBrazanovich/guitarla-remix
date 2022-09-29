import React from "react";
import { Link } from "@remix-run/react";
import { transformDate } from "~/helpers/helpers";

const Blog = ({ blog }) => {
  const { titulo, createdAt, content, precio, url, imagen } = blog;
  const fecha = transformDate(createdAt);
  return (
    <div className="blog">
      <div className="img-wrap">
        <img src={imagen?.data.attributes.formats?.small.url} alt="" />
      </div>
      <div className="container-info">
        <h3 className="titulo">{titulo}</h3>
        <p className="fecha">{fecha}</p>
        <p className="contenido">{content}</p>

        <Link to={`/blog/${url}`} className="blog-button">
          Ver Blog
        </Link>
      </div>
    </div>
  );
};

export default Blog;
