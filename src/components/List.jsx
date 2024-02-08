import { useState , useRef } from 'react';
import { GoPlus } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";

export default function List({list, setList }) {
  const [inputValue, setInputValue] = useState("");
  const inputAdd = () => {
    let copy = [...list];
    copy.push(inputValue);
    setList(copy);
    setInputValue("");
  }
  const inputOnChange = (e) => { 
    setInputValue(e.target.value);
  }
  const handleOnKey = (e) => { 
    if (inputValue !== "" && e.key === "Enter") {
      inputAdd();
    }
  }
  const textInput = useRef(null);

  return (
    <>
      <div className='list'>
        {
          list.map(function (a, i) { 
            return (
              <div className="list-box" key={i}>
                <div className="form-wrap">
                  <input type="checkbox" id={i} />
                  <label htmlFor={i}>{a}</label>
                </div>
                <button onClick={() => { 
                  let copy = [...list];
                  copy.splice(i, 1);
                  setList(copy);
                }}><FaRegTrashAlt /></button>
              </div>
            )
          })
        }
      </div>
      <div className='search-box'>
        <input type="text" placeholder='할일 입력'
          onChange={inputOnChange} ref={textInput} value={inputValue} onKeyPress={handleOnKey} />
        <button onClick={() => { 
          if (inputValue !== "") { 
            inputAdd();
          }
          textInput.current.focus();
        }} className='search-btn'><GoPlus /></button>
      </div>
    </>
  );
}

