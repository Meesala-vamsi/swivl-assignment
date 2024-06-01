import { useState } from "react"
import "./App.css"
import Task from "./components/Task/Task"
import ContextProvider from "./ReactContext/Context"
import EditTaskModel from "./components/EditTaskModel/EditTaskModel"

const App = () => {
  const [edit,setEdit] = useState({id:"",status:false})
  console.log(edit)
  return (
    <ContextProvider>
      {
        edit.status&&<EditTaskModel setEdit={setEdit} id={edit.id}/>
      }
      <div className='app'>
        <Task setEdit={setEdit}/>
      </div>
    </ContextProvider>
  )
}

export default App