import React from "react";
import "./Header.css";
import logoHeader from "../../assets/images/LogoHeader.png";
import Navigation from "../../components/Navigation/Navigation";

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="Logo" />
      <Navigation />
    </header>
  );
}

export default Header;
