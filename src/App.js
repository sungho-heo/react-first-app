import style from "./App.module.css"
import { useState, useEffect } from "react"
function App() {
  const [counter, setCounter] = useState(0)
  const counterUp = () => setCounter((current) => current + 1)
  useEffect(() => {
    console.log("이건 한번만 실행이 됩니다.")
  }, [])
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
