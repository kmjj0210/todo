import './App.css';
import { useState } from 'react';
import { ThemeProvider,styled } from "styled-components";
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyle}  from './theme/global';
import Title from './components/Title';
import List from './components/List';
import Search from './components/Search';

function AppTodo() {
  const localThemeMode = window.localStorage.getItem("theme" || "lightTheme");
  const [themeMode, setThemeMode] = useState(localThemeMode);
  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;
  const [tab, setTab] = useState('all');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='box'>
        <Title themeMode={themeMode} setThemeMode={setThemeMode} tab={tab} setTab={setTab} />
        <List tab={tab} />
        <Search />
      </div>
    </ThemeProvider>
  );
}

export default AppTodo;
