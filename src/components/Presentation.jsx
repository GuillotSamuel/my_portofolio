import React from "react";
import "../styles/Presentation.css";
import portraitSG from "../assets/pictures/portraitSG.webp";

export default function Presentation() {
  return (
    <div className="presentationContainer">
      <div className="sloganContainer">
        <div className="slogan">
          <div className="sloganItem">Hi! I'm Samuel, a French full-stack developer.</div>
        </div>
      </div>

      <img
        src={portraitSG}
        alt="Samuel Guillot Portrait"
        className="portraitSG"
      />

      
    </div>
  );
}
