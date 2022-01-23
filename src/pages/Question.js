import React, { useState } from "react";
import { AnswerQuestion } from "../components/AnswerQuestion";
import { questions } from "../assets/questions";
import { Profile } from "../components/Profile";
import { Points } from "../components/Points";
import '../styles/Question.scss';
import { ButtonBack } from "../components/ButtonBack";

export const Question = () => {
  const [points, setPoints] = useState(0);

  return (
    <div>
      <ButtonBack />
      <h1>Answer the question please🤓</h1>
      <div className="content">
        <div className="questions">
          {questions.map((questionItem, index) => (
            <AnswerQuestion
              key={index}
              points={points}
              setPoints={setPoints}
              question={questionItem}
            />
          ))}
        </div>
        <div className="info">
          <Profile points={ points } />
          <Points newValue={ points } />
        </div>
      </div>
    </div>
  );
};
