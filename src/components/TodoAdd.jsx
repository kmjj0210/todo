import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { v4 as uuidv4 } from 'uuid';

export default function TodoAdd({onAdd}) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") { 
      return;
    };
    onAdd({
      id: uuidv4(),
      text,
      completed: false
    });
    setText("");
  }

  return (
    <form className='formbox' onSubmit={handleSubmit}>
      <input
        type="text"
        id="todoInput"
        placeholder='할일 입력'
        value={text}
        onChange={handleChange}
      />
      <button><GoPlus /></button>
    </form>
  );
}

