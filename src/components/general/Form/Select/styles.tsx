import * as RadixSelect from "@radix-ui/react-select";
import { styled } from "../../../../../stitches.config";

export const SelectTrigger = styled(RadixSelect.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  border: "1px solid $neutral20",
  padding: "0 16px",
  fontSize: 14,
  lineHeight: 1,
  height: 36,
  gap: 5,
  backgroundColor: "white",
  color: "$neutral100",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
  "&:hover": { backgroundColor: "$neutral2", cursor: "pointer" },
  "&:focus": { boxShadow: "0 0 0 2px $orange80; 0 1px 2px 0px $orange80" },
  "&[data-placeholder]": { color: "$neutral100" },
});

export const SelectViewport = styled(RadixSelect.Viewport, {
  padding: 5,
});

export const SelectContent = styled(RadixSelect.Content, {
  overflow: "hidden",
  backgroundColor: "$neutral0",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export const StyledSelectItem = styled(RadixSelect.Item, {
  fontSize: 14,
  lineHeight: 1,
  color: "$neutral100",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: "$neutral60",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    cursor: "pointer",
    outline: "none",
    backgroundColor: "$orange100",
    color: "$neutral0",
  },
});

export const SelectIcon = styled(RadixSelect.SelectIcon, {
  color: "$orange100",
});