import React, { useState } from "react";
import "../styles/ProjectCard.css";
import Works from "../assets/datas/works.json";

export default function ProjectCard() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const toggleOverlay = (work) => {
    setOverlayVisible(!overlayVisible);
    setSelectedWork(work);
  };

  return (
    <div className="projectCardContainer">
      {Works.map((work) => (
        <div
          className="projectCard"
          key={work.id}
          onClick={() => toggleOverlay(work)}
        >
          <img
            src={work.illustration}
            className="workIllustration"
            alt={work.title}
          />
          <h2 className="workTitle">{work.title}</h2>
          <div className="workCategory">{work.category}</div>
        </div>
      ))}

      {overlayVisible && (
        <div className="overlay" onClick={toggleOverlay}>
          <div className="overlayPopUp">
            {selectedWork && (
              <div className="projectOverlay" key={selectedWork.id}>
                <img
                  src={selectedWork.illustration}
                  className="workIllustrationOverlay"
                  alt={selectedWork.title}
                />
                <h2 className="workTitleOverlay">{selectedWork.title}</h2>
                <div className="workCategoryOverlay">{selectedWork.category}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
