import { useState } from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

export default function TodoCont({ tab }) {

  return (
    <>
      <TodoList tab={tab}/>
      <TodoCreate />
    </>
  );
}

