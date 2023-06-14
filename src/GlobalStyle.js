import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    background: ${({ theme }) => theme.color.background};
    transition: all 0.50s linear;
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    font-size: 16px;
    margin: 0 auto;
  }
`;
