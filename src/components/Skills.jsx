import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <div className="skillsContainer">
      <h1>My skills</h1>
      <div className="skillsCard">
        <h2>Front-end</h2>
        <ul className="skillsList">
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>SASS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="skillsCard">
        <h2>Back-end</h2>
        <ul className="skillsList">
          <li>Node JS</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PHP</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="skillsCard">
        <h2>Tools</h2>
        <ul className="skillsList">
          <li>Github</li>
          <li>Postman</li>
          <li>Visual Studio Code</li>
          <li>CLion</li>
          <li>MongoDB</li>
          <li>Figma</li>
          <li>Procreate</li>
        </ul>
      </div>
      <div className="skillsCard">
        <h2>Fintech</h2>
        <p>Development of applications for the fintech sector leveraging my knowledge in programming, finance, accounting, and auditing.</p>
        <ul className="skillsList">
          <li>C</li>
          <li>Python</li>
          <li>Finance</li>
          <li>Accounting</li>
          <li>Auditing</li>
        </ul>
      </div>
    </div>
  );
}
