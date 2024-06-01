import { useContext, useEffect, useState } from "react"
import {v4 as uuidV4} from "uuid"
import "./TaskForm.css"
import TaskList from "../TaskList/TaskList"
import { Context } from "../../ReactContext/Context"

const TaskForm = ({setEdit}) => {

  const {setTodoList,todoList} = useContext(Context)
  const a = JSON.parse(localStorage.getItem("todoList"))

  const [getTitle,setTitle] = useState("")

  const onChangeHandler=(event)=>{
    setTitle(event.target.value)
  }

  const newTask = {
    id:uuidV4(),
    title:getTitle,
    completed:false
  }

  const onSubmitDetails=(event)=>{
    event.preventDefault()
    
    setTodoList((prev)=>([...prev,newTask]))
    setTitle("")
  }

  useEffect(()=>{

  },[todoList])
  return (
    <div className="form-main-container">
      <form onSubmit={onSubmitDetails} className="form-details">
        <button type="submit">Add Task</button>
        <input type="text" name="title" onChange={onChangeHandler} value={getTitle} placeholder="Type Your Task" />
      </form>
      <div className="aa">
      <TaskList setEdit={setEdit}/>
      </div>
    </div>
  )
}

export default TaskForm