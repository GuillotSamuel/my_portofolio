import React from "react";
import "../styles/Works.css";
import ProjectCard from "./ProjectCard.jsx";

export default function Works() {
    return (
      <div className="worksContainer">
        <h1>Projects</h1>
        <div class="line lineContent"></div>
        <ProjectCard />
      </div>
    );
  }