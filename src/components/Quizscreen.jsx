import { useState, useContext } from "react";
import { Quizcontext } from "../helpers/Context";
import { Questionsbank } from "../helpers/Questionbank";
import { FaArrowCircleRight } from "react-icons/fa";

const Quizscreen = () => {
  const [question, setQuestion] = useState(0);
  const [optionSelected, setOptionSelected] = useState(-1);
  const [bgColor, setBgColor] = useState(-1);
  const { score, setScore, setGames } = useContext(Quizcontext);
  const [newQuestion, setNewQuestion] = useState(-1);

  const nextQuestion = () => {
    if (Questionsbank[question].answer === optionSelected) {
      setScore(score + 1);
    }
    setQuestion(question + 1);
    setBgColor(-1);
  };

  const finishQuiz = () => {
    if (Questionsbank[question].answer === optionSelected) {
      setScore(score + 1);
    }
    setGames("result");
  };

  const selection = (val) => {
    setOptionSelected(val);
    if (val === optionSelected) {
      setBgColor(val);
    }
  };
  return (
    <div className="Quiz">
      <p>Double click to select option</p>
      {Questionsbank.filter((a, b) => b === question).map((e, j) => {
        return (
          <>
            <h2 className="heading">{e.prompt}</h2>
            {e.options.map((val, i) => {
              return (
                <button
                  className={bgColor === i && newQuestion === j && "btn"}
                  onClick={() => {
                    selection(i);
                    setNewQuestion(j);
                  }}
                >
                  {val}
                </button>
              );
            })}
          </>
        );
      })}

      {question === Questionsbank.length - 1 ? (
        <button className="finishBtn" onClick={finishQuiz}>
          Submit
        </button>
      ) : (
        <FaArrowCircleRight className="nextBtn" onClick={nextQuestion} />
        // <button onClick={nextQuestion}> // </button>
      )}
    </div>
  );
};

export default Quizscreen;
