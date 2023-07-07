import React, { useState } from "react";
import "../styles/ProjectCard.css";
import Works from "../assets/datas/works.json";

export default function ProjectCard() {


  return (
    <div className="projectCardContainer">
      {Works.map((work) => (
        <div
          className="projectCard"
          key={work.id}
        >
          <img
            src={require(`../assets/pictures/${work.illustration[0]}.png`)}
            className="workIllustration"
            alt={work.title}
            key={work.illustration[0]}
          />
          <div className="workDescription">
            <h2 className="workTitle">{work.title}</h2>
          </div>
        </div>
      ))}


      
    </div>

    
  );
}
