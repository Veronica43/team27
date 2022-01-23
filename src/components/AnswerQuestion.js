import React from "react";
import { Button } from "./Button";
import '../styles/AnswerQuestion.scss';

export const AnswerQuestion = ({ question, points, setPoints }) => {
  return (
    <div className="question-container">
      <p className="question">{question.question}</p>
      {question.answers.map((ansewer, index) => (
        <Button
          key={index}
          text={ansewer.option}
          method={() => (ansewer.isTrue ? setPoints(points + 10) : 0)}
        />
      ))}
    </div>
  );
};
