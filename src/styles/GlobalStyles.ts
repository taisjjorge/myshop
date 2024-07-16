// CSS in JS

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Roboto', sans-serif;
  }

  body {
    background-color: #f8f8f8;
  }

  button {
    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
      transition: filter 0.2s;
    }
  }
`;
