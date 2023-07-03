import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <div className="headerContainer">
        {" "}
        <a href="#" className="logo">
          S. Guillot
        </a>
        <ul>
          <li>
            <a href="#" className="headerButton">
              About
            </a>
          </li>
          <li>
            <a href="#" className="headerButton">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="headerButton">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="line"></div>
    </header>
  );
}
