//@ts-nocheck
import * as Popover from "@radix-ui/react-popover";
import { keyframes, styled } from "@xstyled/styled-components";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const PopoverContent = styled(Popover.Content)`
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: neutral0;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px hsl(206 22% 7% / 20%) 0px
    10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform opacity;

  &[data-state="open"] {
    &[data-side="top"] {
      animation-name: slideDownAndFade;
    }
    &[data-side="right"] {
      animation-name: slideLeftAndFade;
    }
    &[data-side="bottom"] {
      animation-name: slideUpAndFade;
    }
    &[data-side="left"] {
      animation-name: slideRightAndFade;
    }
  }

  &:focus {
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px orange80;
  }
`;

export const PopoverArrow = styled(Popover.Arrow)`
  fill: neutral0;
`;

export const PopoverClose = styled(Popover.Close)`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25;
  width: 25;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: neutral100;
  position: absolute;
  top: 5;
  right: 5;

  &:hover {
    background-color: neutral5;
  }
  &:focus {
    box-shadow: 0 0 0 2px neutral80;
  }
`;
