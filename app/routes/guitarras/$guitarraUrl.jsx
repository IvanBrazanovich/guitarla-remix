import { useLoaderData } from "@remix-run/react";
import React from "react";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "../../styles/tienda.css";

export async function loader({ params }) {
  const guitarra = await getGuitarra(params.guitarraUrl);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return guitarra.data;
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

const Guitarra = () => {
  const guitarra = useLoaderData();
  const { titulo, contenido, precio, imagen } = guitarra[0].attributes;

  return (
    <main className="container-guitarra guitarra-sola">
      <div className="img-wrap">
        <img src={imagen.data.attributes.url} alt="" />
      </div>

      <div className="container-info">
        <h3 className="heading">{titulo}</h3>
        <p className="texto">{contenido}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
};

export default Guitarra;
