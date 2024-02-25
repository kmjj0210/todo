import { useState, useRef} from 'react';
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

export default function TodoCreate(props) {
  const [inputValue, setInputValue] = useState("");
  const inputText = useRef(null);
  const handleInputChange = (e) => setInputValue(e.target.value);
  let todoItemId = props.todoItem.length;

  const todoAdd = () => {
    let copyTodoItem = [...props.todoItem];
    copyTodoItem.push({
      id:todoItemId+1,
      text: inputValue,
      completed: false
    });
    props.setTodoItem(copyTodoItem);
    setInputValue("");
    todoItemId += 1;
    window.localStorage.setItem(`todo`, JSON.stringify(copyTodoItem));
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

