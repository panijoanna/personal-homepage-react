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
  
  .body {
    background-color: #fbfbfe;
    color: #8a899b;
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    font-size: 16px;
    margin: 0 auto;
  }
`;
