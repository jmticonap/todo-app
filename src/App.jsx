import { useState } from 'react'
import './App.css'
import useDB from './hooks/useDB';
import ToDoContainer from './components/ToDoContainer'
import ToDoList from './components/ToDoList'

function App() {
  const [items, setItems] = useState([])
  const [updatetable, setUpdatetable] = useState({})
  const {
    localDB, 
    saveLocaly, 
    deleteLocaly} = useDB()

  return (
    <div className="App">
      <ToDoContainer setter={saveLocaly} updatetable={updatetable} />
      <br/>
      <ToDoList todoItems={localDB} deleteItem={deleteLocaly} updateItem={setUpdatetable} />
    </div>
  )
}

export default App
