import React from "react";
import "../styles/AboutMe.css";
import CVFile from "../assets/documents/CV_SG.pdf";

export default function AboutMe() {
  return (
    <div className="aboutMeContainer generalContentContainer" id="aboutMe">
      <h1>About me</h1>
      <div className="aboutMeText">
        <p className="sloganText1">
          Hi! I'm Samuel, a French full-stack developer. Currently, I divide my
          time between the French Alps and Paris.
        </p>
        <p className="sloganText2">
          Over the past 7 years, I've been working in finance and accounting
          while nurturing a passion for technology, art, and web design. With my
          creative mindset and expertise in visual arts, I'm excited to delve
          into the digital realm and merge my skills in visuals and technology.
        </p>
      </div>
      <a
        href={CVFile}
        download="CV_Samuel_Guillot.pdf"
        classname="button2"
        id="cvButton"
      >
        Dowload my CV
      </a>
      <div className="aboutMeFooterContainer">
        <a href="https://github.com/GuillotSamuel" className="footerLinks">
          <i class="fa-brands fa-github fa-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-guillot-b0188868/"
          className="footerLinks"
        >
          <i class="fa-brands fa-linkedin-in fa-2xl"></i>
        </a>
      </div>

      <div className="blob1"></div>

      <div class="custom-shape-divider-bottom-1688597213">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
