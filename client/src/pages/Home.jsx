import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Field from '../components/Field';
import Todos from '../components/Todos'

function home() {
  const [todoStatus, setTodoStatus] = useState(true);
  return (
    <>
      <Navbar />
      <Field todoStatus={todoStatus} setTodoStatus={setTodoStatus}/>
      <Todos todoStatus={todoStatus} setTodoStatus={setTodoStatus} />
    </>
    
  )
}

export default home