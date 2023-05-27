import { useState } from "react"

function App() {
  const [todo, changeTodo] = useState("")
  const [todoList, setTodos] = useState([])
  const onChange = (event) => changeTodo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (todo === "") {
      return
    }
    setTodos((current) => [todo, ...todoList])
    changeTodo("")
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type='text'
          placeholder='Todo'
        ></input>
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {todoList.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
