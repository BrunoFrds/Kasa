import React from "react";
import "./404.css";

const Error404 = () => {
  return (
    <div className="error-page">
      <h1 className="error">404</h1>
      <p className="alert">Oups! La page que vous demandez n'existe pas.</p>
      <p className="redirection">Retournez vers la page d'accueil</p>
    </div>
  );
};

export default Error404;
