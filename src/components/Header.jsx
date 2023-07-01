import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <a href="#" className="logo">
        SAM.
      </a>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}
