import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Error404 from "./pages/404/404";
import APropos from "./pages/A-propos/APropos";
import Fiche from "./pages/Fiche-logement/Fiche";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    // BrowserRouter va englober toute l'application
    // Routes va englober toutes les routes
    // Route va représenter chaque routes
    // path="/" : chemin correspondant à l'accueil du site
    // path="/apropos" : chemin vers le chemin correspondant
    // path="*" : chemin si l'url ne correspond à aucun chemin déclaré
    // element={<Home />} : on va chercher le composant voulu
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/fiche" element={<Fiche />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
