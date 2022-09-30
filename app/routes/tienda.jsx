import React from "react";
import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import Guitarra from "~/components/guitarra";
import styles from "../styles/tienda.css";

export async function loader() {
  const respuesta = await getGuitarras();
  return respuesta.data;
}

export function meta() {
  return {
    title: "Guitar LA - Tienda",
    description: "Nuestra tienda",
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

const Tienda = () => {
  const guitarras = useLoaderData();

  return (
    <main>
      <h3 className="heading">Nuestra Colección</h3>
      <div className=" guitarra-container">
        {guitarras.map((guitarra) => {
          return (
            <Guitarra
              key={guitarra.attributes.url}
              guitarra={guitarra.attributes}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Tienda;
