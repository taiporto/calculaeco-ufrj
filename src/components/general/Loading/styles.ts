import { keyframes, styled } from "../../../../stitches.config";

const load = keyframes({
  "0%": { width: '0%' },
  "100%": { width: '100%' },
});

export const LoadingBarContainer = styled("div", {
  height: 100,
  width: 2000,
  backgroundColor: "$neutral60",
});

export const LoadingBar = styled("div", {
  height: "100%",
  animation: '$load 5s',
});

