import { useState } from "react";
import { Mainscreen, Quizscreen, Resultscreen } from "./components";
import { Quizcontext } from "./helpers/Context";

function App() {
  const [ games, setGames] = useState("main")
  const [score, setScore] = useState(0)
  const [ username, setUsername] = useState("")
  return (
    <div className="App">
      <h1>React Quiz App</h1>
      <Quizcontext.Provider value={{ games, setGames, score, setScore, username, setUsername }}>
        {games === "main" && <Mainscreen />}
        {games === "quiz" && <Quizscreen />}
        {games === "result" && <Resultscreen />}
      </Quizcontext.Provider>
   
    </div>
  );
}

export default App;
