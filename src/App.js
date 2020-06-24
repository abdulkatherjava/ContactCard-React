import React from "react"
import Joke from "./Joke"
import jokesData from "./JokesData"

function App() {

  console.log(jokesData);
  // const jokeComponents = jokesData.map(joke=> <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  console.log("hai")
  return (
    <div>
      {jokeComponents}
    </div>
  )
}

export default App