import * as RadixSelect from "@radix-ui/react-select";
import { StyledSelectItem } from "../styles";
import React, { Ref } from "react";
import { CheckIcon } from "@radix-ui/react-icons";

export const SelectItem = React.forwardRef(function SelectItem(
  { children, ...props }: React.PropsWithChildren<RadixSelect.SelectItemProps>,
  forwardedRef: Ref<HTMLDivElement>
) {
  return (
    <StyledSelectItem {...props} ref={forwardedRef}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator>
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </StyledSelectItem>
  );
});
