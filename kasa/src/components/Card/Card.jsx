import React from "react";
import "./Card.css";

const Card = ({ id, title, cover }) => {
  return (
    <div id={id} className="card">
      <img src={cover} alt="Card logement" className="card-img" />
      <div className="card-dark"></div>
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
