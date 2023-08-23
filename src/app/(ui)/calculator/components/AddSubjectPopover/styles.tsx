//@ts-nocheck
import * as Popover from "@radix-ui/react-popover";
import { keyframes, styled } from "@xstyled/styled-components";

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from "@/theme/tokens/animations";

export const PopoverContent = styled(Popover.Content)`
  border-radius: 4px;
  padding: 20px;
  width: 100%;
  background-color: neutral0;
  box-shadow: popover;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform opacity;

  &[data-state="open"] {
    &[data-side="top"] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side="right"] {
      animation-name: ${slideLeftAndFade};
    }
    &[data-side="bottom"] {
      animation-name: ${slideUpAndFade};
    }
    &[data-side="left"] {
      animation-name: ${slideRightAndFade};
    }
  }

  &:focus {
    box-shadow: popover-highlight;
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
