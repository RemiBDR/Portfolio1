import React from "react";
import "../sass/_welcome.scss";
// Méthode 1 des images : on importe chaque image
// import bgweed1 from "./assets/bgweed1.jpg";

const Welcome = () => {
  return (
    <div className="welcome">
      {/* <img src="../assets/bgweed2.jpg" alt="" srcset="" /> */}
      <p className="welcome__text">Welcome to my RastaFolio !</p>
      {/* Méthode 1 : on peut donc directement utiliser son nom */}
      {/* <img width={150} height={150} src={bgweed1} alt="" /> */}
      {/* Méthode 2 : après création du dossier "public" à la racine, on peut utiliser le chemin relatif */}
      {/* <img width={150} height={150} src="./assets/bgweed2.jpg" alt="" /> */}
    </div>
  );
};

export default Welcome;
