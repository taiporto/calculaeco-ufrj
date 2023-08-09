//@ts-nocheck
import * as RadixSelect from "@radix-ui/react-select";
import { styled, th } from "@xstyled/styled-components";

export const SelectTrigger = styled(RadixSelect.SelectTrigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid;
  border-color: neutral20;
  padding: 0 16px;
  font-size: 14px;
  line-height: 1;
  height: 36px;
  gap: 5px;
  background-color: white;
  color: neutral100;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  &:hover {
    background-color: neutral2;
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0 0 0 2px orange80, 0 1px 2px 0px orange80;
  }
  &[data-placeholder] {
    color: neutral100;
  }
`;

export const SelectViewport = styled(RadixSelect.Viewport)`
  padding: 5px;
`;

export const SelectContent = styled(RadixSelect.Content)`
  overflow: hidden;
  background-color: neutral0;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const StyledSelectItem = styled(RadixSelect.Item)`
  font-size: 14px;
  line-height: 1;
  color: neutral100;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: neutral60;
    pointer-events: none;
  }

  &[data-highlighted] {
    cursor: pointer;
    outline: none;
    background-color: orange100;
    color: neutral0;
  }
`;

export const SelectIcon = styled(RadixSelect.SelectIcon)`
  color: orange100;
`;
