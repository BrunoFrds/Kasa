import React from "react";
import "./Banniere.css";
import banniereHome from "../../assets/images/BanniereHome.png";

const Banniere = () => {
  return (
    <div className="banniere-home">
      <img src={banniereHome} alt="Banniere accueil" className="banniere-img" />
      <p className="banniere-texte">Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banniere;
