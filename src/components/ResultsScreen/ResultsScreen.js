import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectNumQuizzes, selectNumQuestions, selectResultsByQuiz } from "../../features/game/gameSlice";

export function ResultsScreen () {
  const numQuizzes = useSelector(selectNumQuizzes);
  return (
    <div>

    </div>
  )
}