import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./Components/ListItem"

function App() {

  const [Todo, setTodo] = useState([
    {id: nanoid(4), content: "item 1"},
    {id: nanoid(4), content: "arona"},
    {id: nanoid(4), content: "item 3"}    
  ])

    const [state, setState] = useState("")
    const [showValidation, setShowValidation] = useState(false)

    function handleChange(e){
        setState(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(state === ""){
          setShowValidation(true)
          return
        }
        setTodo([...Todo, {id: nanoid(), content: state}])
        setState("")
        setShowValidation(false)

    }

  function deleteTodo(id){
    setTodo(Todo.filter(todo => todo.id !== id))
  }

  return (
    <>
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">

    <h1 className="text-4xl text-slate-100">La To Do List</h1>

    <form onSubmit={handleSubmit}>
      <label htmlFor="todo" className="block pt-5 text-slate-100 text-2xl mb-2">Ajouter Un chose à faire</label>
      <input
      value={state}
      onChange={handleChange}
       type="text"
       id="todo"
       name="todo"
       className="block w-full rounded"
       />

       {showValidation && (
        <p className="text-red-400">Ajouter du contenu</p>
       )}
        <button className="bg-slate-100 px-8 py-2 rounded mt-2">Ajouter</button>
    </form>
    {Todo.length ===0 && (<li className="text-slate-100 text-md">Pas ditem à afficher...</li>)}
    <ul>
      {Todo.length > 0 && Todo.map(item =>(
        <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
      ))}
    </ul>
       </div>
       </div>
    </>
  )
}

export default App
