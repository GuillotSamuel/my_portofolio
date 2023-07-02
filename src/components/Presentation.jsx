import React from "react";
import "../styles/Presentation.css";

export default function Presentation() {
  return (
    <div className="presentationContainer">
      <div className="sloganContainer">
        <div className="slogan" id="slogan1">
          Full-Stack
        </div>
        <div className="slogan" id="slogan2">
          Web Developer
        </div>
      </div>
      <div className="presentationContainer2">
        <div className="presentationContainer3"></div>
        <div className="presentationContainer3">
          <p className="sloganText1">
            I'm Samuel Guillot, a French full-stack developer. Currently, I
            divide my time between the French Alps and Paris.
          </p>
          <p className="sloganText2">
            For the past 7 years, I have been working in finance and accounting.
            Alongside my professional career, I have cultivated a passion for
            new technologies and art. During my free time, I have dedicated
            myself to drawing and learning how to create websites.
          </p>
          <p className="sloganText2">
            With my enduring appetite for creativity, I now aspire to work in
            Web Design, blending my expertise in visual arts with the digital
            realm. It's an exciting opportunity to combine my passion and skills
            in the world of visuals and the digital domain!
          </p>
          <a href="#" classname="button2" id="cvButton">Dowload my CV</a>
        </div>
      </div>
    </div>
  );
}
