import {useContext} from 'react'
import {Quizcontext} from "../helpers/Context"

const Mainscreen = () => {
    const {games, setGames, username, setUsername} = useContext(Quizcontext)
  return (
    <div className="defaultPage">
    <input
      className="userName"
      value={username}
      name="name"
      placeholder="Ex. John Smith"
      onChange={(e) => setUsername(e.target.value)}
    />
    <button
      onClick={() => {
        setGames("quiz");
      }}
    >
      Start Quiz
    </button>
  </div>
  )
}

export default Mainscreen
