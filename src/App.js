import style from "./App.module.css"
import { useState, useEffect } from "react"
function App() {
  const [counter, setCounter] = useState(0)
  const counterUp = () => setCounter((current) => current + 1)
  const [word, changeWord] = useState("")
  const onChange = (event) => changeWord(event.target.value)
  useEffect(() => {
    console.log("이건 한번만 실행이 됩니다.")
  }, [])
  useEffect(() => {
    console.log("Change word", word)
  }, [word])
  useEffect(() => {
    console.log("Change count", counter)
  }, [counter])
  return (
    <div>
      <input value={word} onChange={onChange} placeholder='Search'></input>
      <h2>{counter}</h2>
      <button className={style.btn} onClick={counterUp}>
        Click
      </button>
    </div>
  )
}

export default App
