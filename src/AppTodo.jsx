import './App.css';
import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyle}  from './theme/global';
import Title from './components/Title';
import Content from './components/Content';

function AppTodo() {
  const localThemeMode = window.localStorage.getItem("theme" || "lightTheme");
  const [themeMode, setThemeMode] = useState(localThemeMode);
  const theme = themeMode === "darkTheme" ? darkTheme : lightTheme;
  const [tab, setTab] = useState('all');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='box'>
        <Title themeMode={themeMode} setThemeMode={setThemeMode} tab = {tab} setTab={setTab} />
        <Content tab={tab} setTab={setTab} />
      </div>
    </ThemeProvider>
  );
}

export default AppTodo;