import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="linksFooterContainer">
          <a href="https://github.com/GuillotSamuel" className="footerLinks">
            Github
          </a>
          <a href="https://www.linkedin.com/in/samuel-guillot-b0188868/" className="footerLinks">
            Linkedin
          </a>
        </div>
        <span className="footerText">Made by Samuel Guillot</span>
      </div>
    </footer>
  );
}
