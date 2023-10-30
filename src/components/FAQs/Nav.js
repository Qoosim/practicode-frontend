import React from "react";
import "./FAQ.css";
import back from "../../images/Vector.png";

export default function Nav() {
  return (
    <nav id="navbar">
      <div id="contain">
        <img src={back} alt="" className="leftangle-vector" />
        <div className="col2">
          <ul>
            <li className="nav--header">
              <h4 className="black">Frequently Asked Questions</h4>
            </li>
            <li>
              <div className="nav-breadcrumb grey">
                <span className="breadcrumb--link">Home {`>`}</span>
                <span className="breadcrumb--link">
                  Frequently Asked Questions
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
