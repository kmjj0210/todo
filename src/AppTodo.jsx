import './App.css';
import { useState } from 'react';
import { ThemeProvider,styled } from "styled-components";
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyle}  from './theme/global';
import Title from './components/Title';
import List from './components/List';

function AppTodo() {
  const localThemeMode = window.localStorage.getItem("theme" || "lightTheme");
  const [themeMode, setThemeMode] = useState(localThemeMode);
  const theme = themeMode === "darkTheme" ? darkTheme : lightTheme;
  const [tab, setTab] = useState('all');
  const [list, setList] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='box'>
        <Title themeMode={themeMode} setThemeMode={setThemeMode} tab={tab} setTab={setTab} />
        <List list={list} setList={setList} tab={tab} setTab={setTab} />
      </div>
    </ThemeProvider>
  );
}

export default AppTodo;