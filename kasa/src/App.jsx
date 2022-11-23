import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Error404 from "./pages/404/404";
import APropos from "./pages/A-propos/APropos";
import Fiche from "./pages/Fiche-logement/Fiche";
import Home from "./pages/Home/Home";

const App = () => {
  return (
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
