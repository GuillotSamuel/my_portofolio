import React, { useState } from "react";
import "../styles/ProjectCard.css";
import Works from "../assets/datas/works.json";

export default function ProjectCard() {
  const [selectedWork, setSelectedWork] = useState(null);

  const handleCardClick = (work) => {
    setSelectedWork(work);
  };

  const handleCloseOverlay = (e) => {
    e.stopPropagation();
    setSelectedWork(null);
  };

  return (
    <div className="projectCardContainer">
      {Works.map((work) => (
        <div
          className="projectCard"
          key={work.id}
          onClick={() => handleCardClick(work)}
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
          {selectedWork && selectedWork.id === work.id && (
            <div className="overlayProjectCard" onClick={handleCloseOverlay}>
              <div className="overlayContent">
                <p>{work.summary}</p>
                <p>{work.category}</p>
                <p>{work.year}</p>
                <a href={work.websiteLink}>Lien vers le site</a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
