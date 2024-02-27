import React , { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';

export default function TodoCont({ tab }) {
  const [todo, setTodo] = useState(() => localTodoGet());
  const handleDelete = (deleted) => setTodo(todo.filter((prev) => prev.id !== deleted.id));
  const handleUpdate = (updated) => setTodo(todo.map((prev) => prev.id === updated.id ? updated : prev));
  const handleAdd = (add) => setTodo([...todo, add]);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo])
  
  const todoList = todoListFilter(todo, tab);

  return (
    <div className='cont'>
      <div className='list'>
        {
          todoList.map((target) => (
            <TodoItem
              key={target.id}
              item={target}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
        }
      </div>
      <TodoAdd onAdd={handleAdd}/>
    </div>
  );
}

function localTodoGet () { 
  let data = localStorage.getItem('todo');
  return data ? JSON.parse(data) : [];
}

function todoListFilter (todo,tab) { 
  if (tab === "ALL") {
    return todo;
  } else if (tab === "ACTIVE") { 
    return todo.filter((prev)=> prev.completed === false);
  } else if (tab === "COMPLETED") {
    return todo.filter((prev)=> prev.completed === true);
  }
};
