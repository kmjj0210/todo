import './App.css';
import React, { useState } from 'react';
import { styled , ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyle}  from './theme/global';
import TodoTab from './components/TodoTab';
import TodoCont from './components/TodoCont';

const TodoBox = styled.div`
  padding: 20px;
  width: 500px;
  border-radius : 30px;
  overflow: hidden;
  background:${({ theme }) => theme.boxBgColor};
`

export default function App() {
  const localThemeMode = localStorage.getItem("theme" || "lightTheme");
  const [themeMode, setThemeMode] = useState(localThemeMode);
  const theme = themeMode === "darkTheme" ? darkTheme : lightTheme;
  const [tab, setTab] = useState('ALL');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoBox>
        <TodoTab themeMode={themeMode} setThemeMode={setThemeMode} tab = {tab} setTab={setTab} />
        <TodoCont tab={tab} />
      </TodoBox>
    </ThemeProvider>
  );
}