import React from "react";
import "../styles/Presentation.css";
import portraitSG from "../assets/pictures/portraitSG.webp";

export default function Presentation() {
  return (
    <div className="presentationContainer">
      <div className="sloganContainer">
        <div className="slogan">
          <div className="sloganItem1">Full Stack</div>
          <div className="sloganItem2">Samuel Guillot</div>

          <div className="sloganItem3">Hi! Welcome to my portfolio. I'm a full-stack web developer, and I'm excited to showcase my skills and projects here. Feel free to explore and learn more about my work!</div>
        </div>
      </div>

      <div className="portraitContainer">
        <img
          src={portraitSG}
          alt="Samuel Guillot Portrait"
          className="portraitSG"
        />
        <div className="blob5"></div>
      </div>
    </div>
  );
}
