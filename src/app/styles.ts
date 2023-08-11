import { createGlobalStyle } from "@xstyled/styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: interFont;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100dvh;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: orange50;
  }

  main {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  div#__next {
    width: 100%,
  }

  p {
    margin: 0
  }
`;