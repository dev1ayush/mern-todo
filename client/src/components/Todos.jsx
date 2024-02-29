import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import Todo from "./Todo";

function Todos({ todoStatus, setTodoStatus }) {
  const [todos, setTodos] = useState([]);
  const [error, setEror] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("http://localhost:8000/todo");
      const data = await res.json();
      console.log(data);
      if (data.msg) {
        setEror(data.msg);
        setTodos([]);
        return setIsLoading(true);
      }
      setTodos(data);
      setEror("");
      setIsLoading(true);
    }

    getTodos();
  }, [todoStatus]);

  return (
    <Card>
      {error != "" && <p>{error}</p>}
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <Todo
              todoStatus={todoStatus}
              setTodoStatus={setTodoStatus}
              key={todo.id}
              todoId={todo.id}
              content={todo.content}
            />
          );
        })}
    </Card>
  );
}

export default Todos;
