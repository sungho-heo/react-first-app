import style from "./App.module.css"
import { useState } from "react"
function App() {
  const [counter, setCounter] = useState(0)
  const counterUp = () => setCounter((current) => current + 1)
  return (
    <div>
      <h2>{counter}</h2>
      <button className={style.btn} onClick={counterUp}>
        Click
      </button>
    </div>
  )
}

export default App
