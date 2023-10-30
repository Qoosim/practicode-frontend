import React, { useState } from "react";
import "./FAQ.css";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";

export default function Question({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleQuestion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="wrapper">
      <div>
        <div className="box" onClick={toggleQuestion}>
          {question}
          <img
            src={plus}
            alt=""
            className={`plus ${isExpanded ? "hide" : ""}`}
          />
          <img
            src={minus}
            alt=""
            className={`plus ${!isExpanded ? "hide" : ""}`}
          />
        </div>
        {isExpanded && <div style={{ padding: "12px" }}>{answer}</div>}
        <hr />
      </div>
    </div>
  );
}
