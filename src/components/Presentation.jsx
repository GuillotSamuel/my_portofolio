import React from "react";
import "../styles/Presentation.css";
import CVFile from "../assets/documents/CV_SG.pdf";
import portraitSG from "../assets/pictures/portraitSG.webp";

export default function Presentation() {
  return (
    <div className="presentationContainer">
      <div className="sloganContainer">
        <div className="slogan">
          <div className="sloganItem">Full-Stack Web</div>
          <div className="sloganItem">Developer</div>
        </div>
      </div>

      <img
        src={portraitSG}
        alt="Samuel Guillot Portrait"
        className="portraitSG"
      />

      <div className="presentationContainer3">
        <p className="sloganText1">
          Hi! I'm Samuel, a French full-stack developer. Currently, I divide my
          time between the French Alps and Paris.
        </p>
        <p className="sloganText2">
          For the past 7 years, I've worked in finance and accounting while
          nurturing a passion for technology, art, and web design. With my
          creativity and expertise in visual arts, I'm excited to explore the
          digital realm and combine my skills in visuals and technology.
        </p>
        <a
          href={CVFile}
          download="CV_Samuel_Guillot.pdf"
          classname="button2"
          id="cvButton"
        >
          Dowload my CV
        </a>
      </div>
    </div>
  );
}
