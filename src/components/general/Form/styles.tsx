import * as RadixForm from "@radix-ui/react-form";
import { styled } from "../../../../stitches.config";

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
