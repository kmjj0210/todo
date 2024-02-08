import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        color : ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.bgColor};
    }
    .box {
        border : 1px solid ${({ theme }) => theme.borderColor};
        box-shadow : ${({ theme }) => theme.boxShadow};
        background-color : ${({theme}) => theme.boxBgColor};
    }
    .mode-toggle {
        color : ${({ theme }) => theme.textColor};
    }
    input {
        color : ${({ theme }) => theme.textColor};
        border-bottom : 1px solid ${({ theme }) => theme.borderColor};
    }
    input::placeholder {
        color : ${({ theme }) => theme.textColor};
    }
`;