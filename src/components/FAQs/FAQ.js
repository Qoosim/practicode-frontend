import React from "react";
import "./FAQ.css";
import Questions from "./Questions.js";
import Nav from "./Nav.js";
import Header from "./header.js";
import Question from "./Question.js";
export default function FAQ() {
  const logo = "Images/PracticodeLogo.jpeg";
  const AllQuestions = Questions.map((query) => {
    return <Question key={query.id} {...query} />;
  });
  return (
    <>
      <Nav />
      <div className="Questions">
        <Header />
        <div className="wrapper">{AllQuestions}</div>
      </div>
    </>
  );
}
