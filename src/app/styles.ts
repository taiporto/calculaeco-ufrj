import { createGlobalStyle, styled } from "@xstyled/styled-components";

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

export const FormContainer = styled.divBox`
  margin: 24px;
  width: 40%;
  text-align: center;
  background: rgba(255, 255, 255, 0.056);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), inset 29.4px -29.4px 29.4px rgba(165, 165, 165, 0.056), inset -29.4px 29.4px 29.4px rgba(255, 255, 255, 0.056);
  backdrop-filter: blur(7px);
  padding: 40px;
  border-radius: 10px;
`;
