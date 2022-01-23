import React from "react";
import { Button } from "./Button";
import '../styles/AnswerQuestion.scss';



export const AnswerQuestion = ({ question, points, setPoints, setIndex, index }) => {
  /*const handleClick = (answer) => {
    console.log(answer)
    if(answer.isTrue){
      setPoints(points + 10)
     
    }
    setIndex(index + 1)
  
  }*/
  return (
    <div className="question-container">
      <p className="question">{question.question}</p>
      {question.answers.map((answer, index) => (
        <Button
          key={index}
          text={answer.option}
          method={() => {
            if(answer.isTrue){
              setPoints(points + 10)             
            }
            setIndex(index + 1)
          }}
          
        />
      ))}
    </div>
  );
};
