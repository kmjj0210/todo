import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

export default function TodoCont({ tab }) {
  const [todoItem, setTodoItem] = useState([]);
  let todoItemGet = window.localStorage.getItem(`todo`);
  useEffect(() => {
    if (todoItemGet == null) { 
      setTodoItem([]);
    } else {
      todoItemGet = JSON.parse(todoItemGet);
      setTodoItem(todoItemGet);
    }
  },[todoItemGet])

  return (
    <>
      <TodoList tab={tab} todoItem={todoItem} setTodoItem={setTodoItem} />
      <TodoCreate todoItem={todoItem} setTodoItem={setTodoItem}/>
    </>
  );
}

