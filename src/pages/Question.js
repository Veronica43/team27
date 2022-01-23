import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

export const Question = () => {
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  return <div></div>;
};
