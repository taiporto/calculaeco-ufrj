//@ts-nocheck
import * as Tooltip from "@radix-ui/react-tooltip";
import { css,styled } from "@xstyled/styled-components";

import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from "@/theme/tokens/animations";

export const InputContainer = styled.divBox`
  display: flex;
  gap: 12px;
`;

type TooltipContentProps = {
  $shouldActivate: boolean;
}

export const TooltipContent = styled<TooltipContentProps>(Tooltip.Content)`
  border-radius: 4px;
  padding: 8px;
  font-size: .8 rem;
  background-color: rgba(248, 248, 248);
  border: 1px solid;
  border-color: neutral10;
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

  ${({$shouldActivate}) => !$shouldActivate && css`display: none`}
`;

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: rgba(248, 248, 248);
  stroke: neutral10;
  stroke-width: 1;
`;
