import { useState, useRef } from 'react';
import { GoPlus } from "react-icons/go";
import { styled } from "styled-components";

const CreateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const CreateInput = styled.input`
  width: 100%;
  padding: 10px;
  background: transparent;
  &::placeholder {
    color: #908790;
  }
`
const CreateBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #D9D9D9;
`

export default function TodoCreate() {
  const [todoItem, setTodoItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputText = useRef(null);
  const handleInputChange = (e) => setInputValue(e.target.value);
  const todoAdd = () => {
    let todoItemGet = window.localStorage.getItem(`todo`);
    let todoItemId = todoItem.length;
    if (todoItemGet == !null) { 
      let todoItemObj = JSON.parse(todoItemGet);
      todoItem.push(todoItemObj +{
        id:todoItemId,
        text: inputValue,
        completed: false
      });
      setTodoItem(todoItem);
    } else {
      todoItem.push({
        id:todoItemId,
        text: inputValue,
        completed: false
      });
    }
    
    
    todoItemId += 1;
    setTodoItem(todoItem);
    setInputValue("");
    window.localStorage.setItem(`todo`, JSON.stringify(todoItem));
  }
  const handleInputKey = (e) => { 
    if (inputValue !== "" && e.key === "Enter") {
      todoAdd();
    }
  }
  const handleCreateClick = () => { 
    if (inputValue !== "") {
      todoAdd();
    }
    inputText.current.focus();
  }

  return (
    <CreateBox>
      <CreateInput type="text" placeholder='할일 입력' value={inputValue} id="todoInput"
        onChange={handleInputChange}  ref={inputText}  onKeyPress={handleInputKey} />
      <CreateBtn onClick={handleCreateClick}><GoPlus /></CreateBtn>
    </CreateBox>
  );
}

