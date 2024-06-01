import React, { useEffect, useState } from 'react'
import {v4 as uuidV4} from "uuid"

export const Context = React.createContext()


const ContextProvider=({children})=>{
    const [todoList,setTodoList] = useState(() => {
    const savedItems = localStorage.getItem('todoList');
    return savedItems ? JSON.parse(savedItems) : [
      {
        id:uuidV4(),
        title:"Javascript",
        completed:false
      },
      {
        id:uuidV4(),
        title:"ReactJS",
        completed:false
      },
      {
        id:uuidV4(),
        title:"MongoDB",
        completed:true
      }
    ];
  });

      useEffect(()=>{
        localStorage.setItem("todoList",JSON.stringify(todoList))
      },[todoList])

     
    return(
        <Context.Provider value={{todoList,setTodoList}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

