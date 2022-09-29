import React from "react";
import logo from "../../public/img/logo.svg";
import Navegation from "./navegation";
const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo guitarla" />
      </div>

      <Navegation />
    </header>
  );
};

export default Header;
