import React from "react";
import { NavLink } from "react-router-dom";
import "./404.css";

const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error">404</h1>
      <p className="alert">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="redirection">
        Retournez vers la page d'accueil{" "}
      </NavLink>
    </div>
  );
};

export default Error;
