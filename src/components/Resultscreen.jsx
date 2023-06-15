import { useContext } from "react";
import { Quizcontext } from "../helpers/Context";
import { Questionsbank } from "../helpers/Questionbank";
import { RiRestartFill } from "react-icons/ri";

const Resultscreen = () => {
    const { score, setScore, setGames, username, setUsername } = useContext(
      Quizcontext
    );
  
    const restartGame = () => {
      setScore(0);
      setGames("main");
      setUsername("");
    };
 
    return (
      <div className="endScreen">
        <h1>Quiz Finished</h1>
        <h2>{username}'s Score</h2>
        <h3>
          {score} / {Questionsbank.length}
        </h3>
        <RiRestartFill onClick={restartGame} className="restartBtn" />
      </div>
    );
}

export default Resultscreen
