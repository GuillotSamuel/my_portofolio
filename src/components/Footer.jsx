import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="infosBlockContainer">
        <a href="https://github.com/GuillotSamuel">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/samuel-guillot-b0188868/">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <span>Made by Samuel Guillot</span>
      </div>
    </footer>
  );
}
