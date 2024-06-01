import { useContext, useState } from "react"
import "./EditTaskModel.css"
import { Context } from "../../ReactContext/Context"

const EditTaskModel = ({setEdit,id}) => {

  const {setTodoList,todoList} = useContext(Context)
  const [updateText,setUpdateText] = useState("")

  const onClickUpdate=()=>{
    setEdit({id:'',status:false})
    todoList.map((eachTodo)=>{
      if(eachTodo.id === id){
        setTodoList((prev) =>
          prev.map((eachTodo) =>
            eachTodo.id === id ? { ...eachTodo, title: updateText } : eachTodo
          )
        );
      }
    })
  }

  const onChangeText=(event)=>{
    setUpdateText(event.target.value)
  }

  const onSubmitUpdate=(event)=>{
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitUpdate} className="edit-container">
      <div className="edit-input-container">
      <input type="text" placeholder="Enter a new TODO" onChange={onChangeText}  />
      <button type="submit" onClick={onClickUpdate}>Update</button>
      </div>
    </form>
  )
}

export default EditTaskModel