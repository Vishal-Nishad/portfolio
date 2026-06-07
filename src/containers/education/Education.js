import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo, illustration} from "../../portfolio";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import codingPerson from "../../assets/lottie/codingPerson";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-main-div">

          {/* LEFT — education cards */}
          <Fade left duration={1000}>
            <div className="education-card-container">
              {educationInfo.schools.map((school, index) => (
                <EducationCard key={index} school={school} />
              ))}
            </div>
          </Fade>

          {/* RIGHT — animation */}
          <Fade right duration={1000}>
            <div className="education-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img
                  alt="Education"
                  src={require("../../assets/images/developerActivity.svg")}
                />
              )}
            </div>
          </Fade>

        </div>
      </div>
    );
  }
  return null;
}