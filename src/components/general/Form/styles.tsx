import * as RadixForm from "@radix-ui/react-form";
import { styled } from "@xstyled/styled-components";

export const FormRoot = styled(RadixForm.Root)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FormField = styled(RadixForm.Field)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
