import React , { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';

export default function TodoCont({ tab }) {
  const [todos, setTodos] = useState(() => localTodoGet());
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));
  const handleUpdate = (updated) => setTodos(todos.map((t) => t.id === updated.id ? updated : t));
  const handleAdd = (added) => setTodos([...todos, added]);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos])
  
  const todoList = todoListFilter(todos, tab);

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

function todoListFilter (todos,tab) { 
  if (tab === "ALL") {
    return todos;
  } else if (tab === "ACTIVE") { 
    return todos.filter((t)=> t.completed === false);
  } else if (tab === "COMPLETED") {
    return todos.filter((t)=> t.completed === true);
  }
};
