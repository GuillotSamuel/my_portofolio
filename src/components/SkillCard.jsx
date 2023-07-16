import React from "react";
import Skills from "../assets/datas/skills.json";
import "../styles/SkillCard.css";

export default function SkillCard() {
  return (
    <div className="skillCardContainer">
      {Skills.map((skill) => {
        return (
          <div className="skillCard" key={skill.id}>
            <i className={`fa ${skill.illustration} skillIllustration`}></i>

            <div className="skillInfos">
              <h2 className="skillTitle">{skill.title}</h2>

              <p>{skill.summary}</p>
              <ul className="skillsList">
                {skill.skills.map((skill2, index) => (
                  <li className="skill" key={index}>
                    {skill2}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
