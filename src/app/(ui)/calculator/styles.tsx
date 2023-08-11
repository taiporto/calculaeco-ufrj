//@ts-nocheck
import { buttonStyle } from "@/components/general/Button/styles";
import * as Popover from "@radix-ui/react-popover";
import { styled } from "@xstyled/styled-components";

export const Form = styled.formBox`
  display: flex;
  flex-wrap: wrap;
`;

export const PopoverTrigger = styled(Popover.Trigger)`
  ${buttonStyle}
`;
