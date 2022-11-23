import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/images/LogoFooter.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img src={logoFooter} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
