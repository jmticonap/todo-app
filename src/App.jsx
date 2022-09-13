import { useState } from 'react'
import './App.css'
import Fab from '@mui/material/Fab';
import PostIcon from '@mui/icons-material/PostAdd'
import useDB from './hooks/useDB';
import ToDoContainer from './components/ToDoContainer'
import ToDoList from './components/ToDoList'

function App() {
  const [visibleForm, setVisibleForm ] = useState(false)
  const [items, setItems] = useState([])
  const [updatetable, setUpdatetable] = useState({})
  const {
    localDB, 
    saveLocaly, 
    deleteLocaly} = useDB()

  return (
    <div className="App">
      <Fab 
        onClick={()=>setVisibleForm(!visibleForm)}
        color="success" 
        sx={{position:'absolute', top: '10px', left: '10px'}}>
        <PostIcon />
      </Fab>
      {
        visibleForm&&<ToDoContainer 
        setterForm={setVisibleForm}
          setter={saveLocaly} 
          updatetable={updatetable} />
      }
      
      <br/>
      <ToDoList todoItems={localDB} deleteItem={deleteLocaly} updateItem={setUpdatetable} />
    </div>
  )
}

export default App
