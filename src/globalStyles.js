import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      font-family: 'Poppins', sans-serif;
      
  }

  h1,
  h2 {
    margin: 0;
  }
`;

export default GlobalStyles;
