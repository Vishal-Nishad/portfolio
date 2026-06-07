import React, {useContext} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {Icon} from "@iconify/react";

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-full-div">
        <Fade bottom duration={1000}>
          <div className="skills-text-div full-width">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}
            </h1>

            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>

            <div className="skills-groups-wrapper">
              {skillsSection.skills.map((group, i) => (
                <div key={i} className="skills-group-block">
                  <h3
                    className={
                      isDark
                        ? "dark-mode skills-group-title"
                        : "skills-group-title"
                    }
                  >
                    {group.title}
                  </h3>

                  <div className="skills-pill-wrap">
                    {group.items.map((skill, index) => (
                      <div key={index} className="skill-pill">
                        <Icon icon={skill.icon} className="skill-pill-icon" />
                        <span className="skill-pill-text">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}