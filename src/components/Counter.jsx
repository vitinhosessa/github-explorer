import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0)

  function addCounter() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={addCounter}>Carlão</button>
    </div>
  )
}