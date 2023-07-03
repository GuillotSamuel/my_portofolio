import React from "react";
import "../styles/ProjectCard.css";
import Works from "../assets/datas/works.json";
import booki1 from "../assets/pictures/booki1.png";
import kasa1 from "../assets/pictures/kasa1.png";
import kasa2 from "../assets/pictures/kasa2.png";
import kasa3 from "../assets/pictures/kasa3.png";

export default function ProjectCard() {
  return (
    <div className="projectCardContainer">
      {Works.map((work) => {
        return (
          <div className="projectCard" key={work.id}>
            <img
              src={work.illustration}
              className="workIllustration"
              alt={work.title}
            ></img>
            <div className="projectCardContainer2">
              <h2 className="workTitle">{work.title}</h2>
              <div className="workYear">{work.year}</div>
              <div className="workSummary">{work.summary}</div>
              <a href={work.websiteLink} className="workWebsiteLink">
                Online version
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
