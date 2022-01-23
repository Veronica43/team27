import React, { useState } from "react";
import { AnswerQuestion } from "../components/AnswerQuestion";
import { questions } from "../assets/questions";
import { Profile } from "../components/Profile";
import { Points } from "../components/Points";
import '../styles/Question.scss';
import { ButtonBack } from "../components/ButtonBack";

export const Question = () => {
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0); 

  
  let questionComponent = questions.map((question, questionIndex) => {
      return (questionIndex === index ? 
      <AnswerQuestion
        points={points}
        setPoints={setPoints}
        question={question} 
        key={questionIndex}
        setIndex={setIndex}
        index={index} 
       />
      : null) 
  })

  return (
    <div>
      <ButtonBack />
      <h1>Answer the question please🤓</h1>
      <div className="content">
        <div className="questions">
          {questionComponent}
        </div>
        <div className="info">
          <Profile points={ points } />
          <Points newValue={ points } />
        </div>
      </div>
    </div>
  );
};
