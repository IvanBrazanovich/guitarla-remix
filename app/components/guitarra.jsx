import { Link } from "@remix-run/react";
import React from "react";

const Guitarra = ({ guitarra }) => {
  //Destructuring
  const { titulo, createdAT, contenido, precio, url, imagen } = guitarra;
  return (
    <div className="container-guitarra">
      <div className="img-wrap">
        <img src={imagen.data.attributes.formats?.small.url} alt="" />
      </div>

      <div className="container-info">
        <h3 className="heading">{titulo}</h3>
        <p className="contenido">{contenido}</p>
        <p className="precio">${precio}</p>
        <Link to={`/guitarras/${url}`} className="guitarra-button">
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
