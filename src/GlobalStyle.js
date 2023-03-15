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
    background-color: ${({ theme }) => theme.color.whiteLilac};
    color: ${({ theme }) => theme.color.manatee};
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    font-size: 16px;
    margin: 0 auto;
  }
`;
