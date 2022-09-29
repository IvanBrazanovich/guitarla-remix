import { useLoaderData } from "@remix-run/react";
import React from "react";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "../../styles/tienda.css";

export async function loader({ params }) {
  const guitarra = await getGuitarra(params.guitarraUrl);
  return guitarra.data;
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
  const { titulo, createdAT, contenido, precio, url, imagen } =
    guitarra[0].attributes;

  console.log(imagen);
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
