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

      <div class="custom-shape-divider-bottom-1688742804">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
