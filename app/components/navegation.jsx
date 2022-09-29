import React from "react";
import { Link, useLocation } from "@remix-run/react";

const Navegation = () => {
  const location = useLocation();

  return (
    <div className="navigation-container">
      <Link className={location.pathname === "/" ? "active" : ""} to="/">
        Inicio
      </Link>
      <Link
        className={location.pathname === "/nosotros" ? "active" : ""}
        to="/nosotros"
      >
        Nostros
      </Link>
      <Link
        className={location.pathname === "/tienda" ? "active" : ""}
        to="/tienda"
      >
        Tienda
      </Link>
      <Link
        className={location.pathname === "/blog" ? "active" : ""}
        to="/blog"
      >
        Blog
      </Link>
    </div>
  );
};

export default Navegation;
