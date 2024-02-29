import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import style from './Todo.module.css'

function Todo({ todoId, content, todoStatus, setTodoStatus }) {
    const handleDeleteTodo = async(id) => {
      const res = await fetch(`http://localhost:8000/todo/delete/${id}`, {
         method:"DELETE"
      })
      
      setTodoStatus(!todoStatus);
      console.log('clicked');
   }
  return (
      <div className={style.todo}>
          <p>{content}</p> 
      <DeleteIcon onClick={()=>handleDeleteTodo(todoId)} />
    </div>
  )
}

export default Todo