import React from "react";

const Guitarra = ({ guitarra }) => {
  console.log(guitarra);
  //Destructuring
  const { titulo, createdAT, contenido, precio, url, imagen } = guitarra;
  console.log(imagen);
  console.log(imagen.data.attributes.formats.small);
  return (
    <div className="container-guitarra">
      <div className="img-wrap">
        <img src={imagen.data.attributes.formats?.small.url} alt="" />
      </div>

      <div className="container-info">
        <h3 className="heading">{titulo}</h3>
        <p className="contenido">{contenido}</p>
        <p className="precio">${precio}</p>
        <button className="guitarra-button">Ver Producto</button>
      </div>
    </div>
  );
};

export default Guitarra;
