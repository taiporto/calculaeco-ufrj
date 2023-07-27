import * as RadixSelect from "@radix-ui/react-select";
import * as RadixForm from "@radix-ui/react-form";
import { styled } from "../../../stitches.config";

export const FormRoot = styled(RadixForm.Root, {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const FormField = styled(RadixForm.Field, {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const SelectTrigger = styled(RadixSelect.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  border: "1px solid $neutral20",
  padding: "0 16px",
  fontSize: 14,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: "white",
  color: "$neutral100",
  boxShadow: `0 2px 10px $neutral100`,
  "&:hover": { backgroundColor: "$neutral5", cursor: "pointer" },
  "&:focus": { boxShadow: `0 0 0 2px $neutral100` },
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
