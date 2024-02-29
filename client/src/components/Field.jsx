import React, { useState } from 'react';
import style from './Field.module.css';

function Field({todoStatus,setTodoStatus}) {
    const [todoData, setTodoData] = useState("");
    const handleOnchange = (e) => {
        const data = e.target.value;
        setTodoData(data)
    }

    const handleNewTodo = async (e) => {
        e.preventDefault();
        if (todoData.trim() == "") {
            return;
        }
        const res = await fetch('http://localhost:8000/todo/new', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: todoData })
        })

        setTodoStatus(!todoStatus);
        setTodoData("");
    }

    return (
        <form className={style.field} action="">
            <input onChange={handleOnchange} value={todoData} type="text" />
            <button onClick={handleNewTodo}>add</button>
      </form>
  )
}

export default Field;