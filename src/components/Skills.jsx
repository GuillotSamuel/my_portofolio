import React from "react";
import "../styles/Skills.css";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="skillsContainer">
      <h1>Skills</h1>
      <div class="line lineContent"></div>
      <SkillCard />
    </div>
  );
}
