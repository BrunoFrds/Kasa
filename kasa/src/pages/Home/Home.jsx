import React from "react";
import "./Home.css";
import Banniere from "../../components/Banniere/Banniere";
import banniereHome from "../../assets/images/BanniereHome.png";
import Card from "../../components/Card/Card";
import ListeLogement from "../../assets/api/logements.json";

const Home = () => {
  return (
    <div className="home">
      <Banniere image={banniereHome} texte="Chez vous, partout et ailleurs" />
      <div className="card-list">
        {ListeLogement.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
