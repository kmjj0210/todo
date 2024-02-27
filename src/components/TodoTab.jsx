import React from 'react';
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";

export default function TodoTab({themeMode,setThemeMode,tab,setTab}) {
  const toggleTheme = () => {
    if (themeMode === "darkTheme") {
      setThemeMode("lightTheme");
      localStorage.setItem("theme", "lightTheme");
    } else {
      setThemeMode("darkTheme");
      localStorage.setItem("theme", "darkTheme");
    }
  }
  const tabData = ['ALL', 'ACTIVE', 'COMPLETED'];

  return (
    <div className='title'> 
      <button className='toggle' onClick={toggleTheme}>
        {themeMode === "darkTheme" ? <MdOutlineWbSunny /> : <MdOutlineModeNight />}
      </button>
      <ul>
        {
          tabData.map((data,index) => (
            <li
              key={index}
              className={tab === data ? "active" : null}
              onClick={() => setTab(data)}
            >{data}</li>
          ))
        }
      </ul>
    </div>
  );
}