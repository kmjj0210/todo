import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        color : ${({ theme }) => theme.textColor};
        background: ${({ theme }) => theme.bgColor};
    }
    .title {
        background:${({ theme }) => theme.contBgColor};
    }
    .title li.active {
        color:${({theme}) => theme.activeColor};
        background:${({theme}) => theme.activeBgColor};
    }
    .toggle {
        color : ${({ theme }) => theme.activeColor};
    }
    .list {
        background:${({theme}) => theme.contBgColor}
    }
    .formbox input {
        color : ${({ theme }) => theme.textColor};
        background:${({theme}) => theme.contBgColor}
    }
    .formbox button {
        color : ${({theme}) => theme.addBtnColor};
        background:${({theme}) => theme.addBtnBgColor};
    }
`;