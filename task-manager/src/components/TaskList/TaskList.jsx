import { useContext } from "react"
import "./TaskList.css"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Context } from "../../ReactContext/Context"

const TaskList = ({setEdit}) => {
  const {todoList,setTodoList} = useContext(Context)

  

  const onChangeCheckBox=(id)=>{
    console.log(id)
    setTodoList((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo
      )
    );
  }


  const onClickDelete=(id)=>{
    const filterdData = todoList.filter((eachTodo)=>eachTodo.id!==id)
    setTodoList(filterdData)
  }

  return (
    <ul className="tasklist-container">
        {
          todoList.map((eachTodo,index)=>(
            <li key={index} className="tasklist-items">
              <div className="checkbox-container">
                <input id={eachTodo.id} type="checkbox" checked={eachTodo.completed} onChange={()=>onChangeCheckBox(eachTodo.id)} />
                <label htmlFor={eachTodo.id} className={eachTodo.completed?"strikeout":"remove-strikeout"}>{eachTodo.title}</label>
              </div>
              <div className="todo-icons-container">
                <DeleteIcon className="todo-icon" onClick={()=>onClickDelete(eachTodo.id)}/>
                <ModeEditIcon className="todo-icon" onClick={()=>setEdit({id:eachTodo.id,status:true})}/>
              </div>
            </li>
          ))
        }
    </ul>
  )
}

export default TaskList