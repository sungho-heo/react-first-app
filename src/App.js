import style from "./App.module.css"
import { useState, useEffect } from "react"
function App() {
  const [counter, setCounter] = useState(0)
  const counterUp = () => setCounter((current) => current + 1)
  const [word, changeWord] = useState("")
  const onChange = (event) => changeWord(event.target.value)
  const Hello = () => {
    useEffect(() => {
      console.log("I'm here")
      return () => console.log("bye")
    }, [])
    return <h1>Hello</h1>
  }
  const [showing, setShow] = useState(false)
  const onClick = () => setShow((current) => !current)
  return (
    <div>
      <input value={word} onChange={onChange} placeholder='Search'></input>
      <h2>{counter}</h2>
      <button className={style.btn} onClick={counterUp}>
        Click
      </button>
      <hr />
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      </div>
    </div>
  )
}

export default App
