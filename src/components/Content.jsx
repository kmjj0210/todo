import { useState, useRef } from 'react';
import { GoPlus } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Content({ tab, setTab }) {
  const [list, setList] = useState([]);
  const [comp, setComp] = useState([]);
  const [inputValue, setInputValue] = useState("");
  let copyList = [...list];
  let copyComp = comp;
  const inputAdd = () => {
    copyList.push(inputValue);
    setList(copyList);
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
                  <input type="checkbox" id={i}
                    onChange={({ target: { checked } }) => { 
                    if (checked) { 
                      copyComp.push(i);
                      copyComp.sort();
                      setComp(copyComp);
                    } else {
                      copyComp.splice(i, 1);
                      copyComp.sort();
                      setComp(copyComp);
                    }
                    console.log(copyComp);
                  }} />
                  <label htmlFor={i}>{a}</label>
                </div>
                <button onClick={() => { 
                  copyList.splice(i, 1);
                  setList(copyList);
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



