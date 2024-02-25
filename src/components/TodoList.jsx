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

  const todoFilter = props.todoItem.filter((item) => { 
    if (props.tab === "all") {
        return true;
    } else if (props.tab === "active") { 
      return !item.completed;
    } else if (props.tab === "completed") {
      return item.completed;
    }
  });
  
  const handleDel = (e) =>{
    let copyList = [...props.todoItem];
    let delIndex = copyList.findIndex((value) => value.id === e.id);
    copyList.splice(delIndex, 1);
    props.setTodoItem(copyList);
    window.localStorage.setItem(`todo`, JSON.stringify(copyList));
  }
  return (
    <Content>
      {
        props.todoItem == [] ?
          <></> :
        todoFilter.map((item) => (
          <ContentBox key={item.id}>
            <FormWap todoItem={props.todoItem} item={item} />
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
          window.localStorage.setItem(`todo`, JSON.stringify(props.todoItem));
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