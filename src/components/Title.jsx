import React from 'react';
import { MdOutlineModeNight , MdOutlineWbSunny} from "react-icons/md";

export default function Title({ themeMode, setThemeMode, tab, setTab }) {
    const toggleTheme = () => {
    if (themeMode === "darkTheme") {
      setThemeMode("lightTheme");
      window.localStorage.setItem("theme", "lightTheme");
    } else {
      setThemeMode("darkTheme");
      window.localStorage.setItem("theme", "darkTheme");
    }
  };
  return (
    <div className="title"> 
      <button className='mode-toggle' onClick={toggleTheme}>
        {themeMode === "lightTheme" ? <MdOutlineWbSunny /> : <MdOutlineModeNight />}
      </button>
      <ul className="title-tab">
        <li onClick={()=>setTab('all')}>All</li>
        <li onClick={()=>setTab('active')}>active</li>
        <li onClick={()=>setTab('completed')}>completed</li>
      </ul>
    </div>
  );
}

