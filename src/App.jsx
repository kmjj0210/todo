import './App.css';
import { useState } from 'react';
import { styled , ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyle}  from './theme/global';
import TodoTab from './components/TodoTab';
import TodoCont from './components/TodoCont';

const TodoList = styled.div`
  padding: 30px;
  width: 600px;
  border : 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  box-shadow : ${({ theme }) => theme.boxShadow};
  background-color : ${({theme}) => theme.boxBgColor};
`

export default function App() {
  const localThemeMode = window.localStorage.getItem("theme" || "lightTheme");
  const [themeMode, setThemeMode] = useState(localThemeMode);
  const theme = themeMode === "darkTheme" ? darkTheme : lightTheme;
  const [tab, setTab] = useState('all');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoList>
        <TodoTab themeMode={themeMode} setThemeMode={setThemeMode} tab = {tab} setTab={setTab} />
        <TodoCont tab={tab} setTab={setTab} />
      </TodoList>
    </ThemeProvider>
  );
}