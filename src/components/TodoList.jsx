import { useState } from 'react';
import { styled } from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

const Content = styled.div`
  padding-top: 20px;
  height: 400px;
  overflow: auto;
`
const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const FormWapCont = styled.div`
  margin: 15px 0;
`

export default function TodoList(props) {
  let [todoData, setTodoData] = useState([]);
  let todoItemGet = window.localStorage.getItem(`todo`);
  let todoItemObj = JSON.parse(todoItemGet);
  todoData = todoItemObj;
  console.log(todoData);

  const todoFilter = todoData.filter((item) => { 
    if (props.tab === "all") {
        return true;
    } else if (props.tab === "active") { 
      return !item.completed;
    } else if (props.tab === "completed") {
      return item.completed;
    }
  });
  
  const handleDel = (e) =>{
    let copyList = [...todoData];
    let delIndex = todoData.findIndex((value) => value.id === e.id);
    copyList.splice(delIndex, 1);
    setTodoData(copyList);
  }
  return (
    <Content>
      {
        todoData.length === 0 ?
          <></> :
        todoFilter.map((item) => (
          <ContentBox key={item.id}>
            <FormWap item={item} />
            <DelBtn item={item} handleDel={handleDel} />
          </ContentBox>
        ))
      }
    </Content>
  );
}

function FormWap(props) { 
  return (
    <FormWapCont>
      <input type="checkbox" id={props.item.id} defaultChecked={props.item.completed}
        onChange={({ target: { checked } }) => {
          checked ? props.item.completed = true : props.item.completed = false;
        }}
      />
      <label htmlFor={props.item.id}>{props.item.text}</label>
    </FormWapCont>
  )
}
function DelBtn(props) { 
  return (
    <button onClick={() => { props.handleDel(props.item) }}>
      <FaRegTrashAlt />
    </button>
  )
}