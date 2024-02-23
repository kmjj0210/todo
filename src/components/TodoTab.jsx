import React from 'react';
import { styled } from "styled-components";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";

const Title = styled.div`
  display: flex;
  align-items: center;
`
const Tab = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
`
const TabItem = styled.li`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  &.active {
    color : #FFC83E;
  }
`
const ToggleBtn = styled.button`
  padding: 5px;
  line-height: 30px;
  svg {
    vertical-align: middle;
  }
`

export default function TodoTab(props) {
  const toggleTheme = () => {
    if (props.themeMode === "darkTheme") {
      props.setThemeMode("lightTheme");
      window.localStorage.setItem("theme", "lightTheme");
    } else {
      props.setThemeMode("darkTheme");
      window.localStorage.setItem("theme", "darkTheme");
    }
  }
  const tabData = ['all', 'active', 'completed'];
  

  return (
    <Title> 
      <ToggleBtn onClick={toggleTheme}>
        {props.themeMode === "darkTheme" ? <MdOutlineModeNight /> : <MdOutlineWbSunny />}
      </ToggleBtn>
      <Tab>
        {
          tabData.map( (data,index) => (
            <TabItem key={index}
              className={props.tab === data ? "active" : null}
              onClick={() => props.setTab(data)} >{data}</TabItem>
          ))
        }
      </Tab>
    </Title>
  );
}