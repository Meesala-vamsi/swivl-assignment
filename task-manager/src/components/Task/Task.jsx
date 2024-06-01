
import "./Task.css"
import TaskForm from "../TaskForm/TaskForm"

const Task = ({setEdit}) => {


  return (
    <div className="task-container">
      <div className="heading-container">
        <h1>TODO LIST</h1>
      </div>
      <div className="taskform-container">
        <TaskForm setEdit={setEdit}/>
      </div>
    </div>
  )
}

export default Task