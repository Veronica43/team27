import React, { useState } from "react";
import { AnswerQuestion } from "../components/AnswerQuestion";
import { questions } from "../assets/questions";

export const Question = () => {
  const [points, setPoints] = useState(0);

  return (
    <div>
      {questions.map((questionItem, index) => (
        <AnswerQuestion
          key={index}
          points={points}
          setPoints={setPoints}
          question={questionItem}
        />
      ))}
    </div>
  );
};
