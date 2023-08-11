//@ts-nocheck
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from "@/theme/tokens/animations";
import * as Tooltip from "@radix-ui/react-tooltip";
import { styled } from "@xstyled/styled-components";

export const InputContainer = styled.divBox`
  display: flex;
  gap: 12px;
`;

export const TooltipContent = styled(Tooltip.Content)`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1;
  color: var(--violet-11);
  background-color: white;
  box-shadow: popover;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }

  &[data-state='delayed-open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-state='delayed-open'][data-side='bottom'] {
  animation-name: ${slideUpAndFade};
  }
  &[data-state='delayed-open'][data-side='left'] {
  animation-name: ${slideRightAndFade};
  }
`;

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: white;
`;
