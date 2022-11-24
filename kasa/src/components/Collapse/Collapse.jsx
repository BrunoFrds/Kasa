import React, { useState } from "react";
import "./Collapse.css";
import flecheVert from "../../assets/images/FlecheVert.png";

const Collapse = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header">
        <div className="collapse-title">{title}</div>
        <p className={`collapse-fleche ${open}`} onClick={() => setOpen(!open)}>
          <img src={flecheVert} alt="Ouvrir cette liste" />
        </p>
      </div>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        open && (
          <div className="collapse-description">
            <p className="description">{description}</p>
          </div>
        )
      }
    </div>
  );
};

export default Collapse;
