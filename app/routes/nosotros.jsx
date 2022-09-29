import React from "react";
import nosotrosImg from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function meta() {
  return {
    title: "Guitar LA - Sobre Nosotros",
    description: "Nuestra historia y lo que nos identifica",
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
const Nosotros = () => {
  return (
    <main className="nosotros-container contenedor">
      <h3 className="heading">Nosotros</h3>
      <div className="wrapper">
        <div className="img-wrapper">
          <img src={nosotrosImg} alt="imagen de guitarra" />
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nostrum provident impedit, rerum quasi architecto reprehenderit
            aliquid exercitationem consequuntur eius! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Debitis nostrum provident impedit,
            rerum quasi architecto reprehenderit aliquid exercitationem
            consequuntur eius!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nostrum provident impedit, rerum quasi architecto reprehenderit
            aliquid exercitationem consequuntur eius!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
