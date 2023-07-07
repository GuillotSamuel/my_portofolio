import React from "react";
import "../styles/Services.css";

export default function ProjectCard() {
  return (
    <div className="servicesContainer">
      <h1>Services</h1>
      <div className="serviceCardContainer">
        <div className="serviceCard">
          <h2>Applications</h2>
          <span>
            I develop showcase websites, e-commerce platforms, web, mobile, or
            desktop applications.
          </span>
        </div>
        <div className="serviceCard">
          <h2>User Experience & Design</h2>
          <span>A smooth and beautiful experience for your clients.</span>
        </div>

        <div className="serviceCard">
          <h2>Accessibility</h2>
          <span>
            We all have the right to explore the web. Semantic HTML and ARIA if
            applicable.
          </span>
        </div>
      </div>
    </div>
  );
}
