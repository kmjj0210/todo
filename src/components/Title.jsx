import React from 'react';
import { useState } from 'react';
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import styled from 'styled-components';

export default function Title({ themeMode, setThemeMode ,tab, setTab}) {
  const toggleTheme = () => {
    if (themeMode === "darkTheme") {
      setThemeMode("lightTheme");
      window.localStorage.setItem("theme", "lightTheme");
    } else {
      setThemeMode("darkTheme");
      window.localStorage.setItem("theme", "darkTheme");
    }
  }
  const TabBtn = styled.li`
    color : ${({isActive}) => (isActive ? '#222' : 'red')};
  `
  const TitleTab = [
    {title: "all", content : setTab('all')},
    {title: "active", content : setTab('active')},
    {title: "completed", content : setTab('completed')}
  ]

  return (
    <div className="title"> 
      <button className='mode-toggle' onClick={toggleTheme}>
        {themeMode === "darkTheme" ? <MdOutlineModeNight /> : <MdOutlineWbSunny />}
      </button>
      <ul className="title-tab">
        {
          TitleTab.map((tab, index) => { 
            <TabBtn key={index} isActive={tab === index}
              onClick={() => setTab(index)} >{tab.title}</TabBtn>
          })
        }
      </ul>
    </div>
  );
}

