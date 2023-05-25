import Button from "./Button.js"
import style from "./App.module.css"

function App() {
  return (
    <div>
      <h2 className={style.title}>Welcome React</h2>
      <Button text={"Home"} />
    </div>
  )
}

export default App
