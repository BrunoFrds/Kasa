import React, { useState, useEffect } from "react";
import "./Fiche.css";
import { Navigate, useParams } from "react-router-dom";
import ListeLogements from "../../assets/api/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import etoile from "../../assets/images/Etoile.png";
import etoileVide from "../../assets/images/EtoileVide.png";

const Fiche = () => {
  /*const [location, setLocation] = useState({
    host: { name: "", picture: "" },
    rating: "",
    equipments: [],
    tags: [],
    pictures: [],
  });*/

  const id = useParams();

  /*const logement = ListeLogements.map((logement) => {
    return logement.id === id.id;
  });
  console.log(logement);*/

  const ficheLogement = ListeLogements.find(
    (logement) => logement.id === id.id
  );

  const tagsLogement = ficheLogement?.tags.map((tags, index) => {
    return <Tag key={index} name={tags} />;
  });

  let noteLogement = [];
  let etoileComplete = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(ficheLogement.rating)) {
      etoileComplete = false;
    }
    if (etoileComplete === true) {
      noteLogement.push(
        <img
          key={index}
          className="etoile"
          src={etoile}
          alt={`${ficheLogement.rating}/5`}
        />
      );
    } else {
      noteLogement.push(
        <img
          key={index}
          className="etoile"
          src={etoileVide}
          alt={`${ficheLogement.rating}/5`}
        />
      );
    }
  }

  const equipmentsLogement = ficheLogement.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>;
    }
  );

  return (
    <>
      {ficheLogement ? (
        <div className="fiche">
          <Carrousel images={ficheLogement.pictures} />
          <div className="info-logement">
            <div className="title-fiche">
              <h1 className="title-logement">{ficheLogement.title}</h1>
              <h2 className="location-logement">{ficheLogement.location}</h2>
            </div>
            <div className="tags-logement">{tagsLogement}</div>
            <div className="host-logement">
              <h2 className="name-host-logement">{ficheLogement.host.name}</h2>
              <img
                className="img-host-logement"
                src={ficheLogement.host.picture}
                alt="Locataire"
              />
            </div>
            <div className="note-logement">{noteLogement}</div>
            <div className="collapse-fiche">
              <Collapse
                title="Description"
                description={ficheLogement.description}
              />
              <Collapse title="Equipements" description={equipmentsLogement} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default Fiche;
