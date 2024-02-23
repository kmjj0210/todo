import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        color : ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.bgColor};
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