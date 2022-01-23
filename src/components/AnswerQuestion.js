import React from "react";
import { Button } from "./Button";

export const AnswerQuestion = ({ question, points, setPoints }) => {
  return (
    <div>
      <h1>Answer the question please🤓</h1>
      <p>{question.question}</p>
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
