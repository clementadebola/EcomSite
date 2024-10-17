import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif; /* Add a global font if you like */
    background-color: #fff; /* Optional background color */
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  html, body {
    height: 100%;
  }
`;

export default GlobalStyles;
