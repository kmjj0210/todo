import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        color : ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.bgColor};
    }
    .box {
        border : 1px solid ${({ theme }) => theme.borderColor};
    }
    .mode-toggle {
        color : ${({ theme }) => theme.textColor};
    }
`;