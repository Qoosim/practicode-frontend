import React from "react";
import hyphen from "./images/pseudo.png";
export default function Header() {
  return (
    <div className="FAQ--header">
      <div className="headers">
        <h6 className="yellow">
          <img src={hyphen} alt="" />
          FAQ Questions
        </h6>
        <h3 className="black">Get Every General Answers From Here</h3>
        <div className="header--nav">
          <a href="" className="bgyellow">
            General
          </a>
          <a href="" className="bglightwhite">
            Enrolment
          </a>
          <a href="" className="bglightwhite">
            Learning Experience
          </a>
        </div>
      </div>
    </div>
  );
}
