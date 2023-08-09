import { keyframes, styled } from "@xstyled/styled-components";

const load = keyframes({
  "0%": { width: '0%' },
  "100%": { width: '100%' },
});

export const LoadingBarContainer = styled.divBox`
  height: 100;
  width: 2000;
  background-color: neutral60;
`;

export const LoadingBar = styled.divBox`
  height: 100%;
  animation: load 5s;
`;

