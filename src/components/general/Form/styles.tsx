//@ts-nocheck

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

export const FormContainer = styled.divBox`
  display: flex;
  flex-direction: inherit;
  gap: inherit;
  width: 40%;
  text-align: center;
  background: rgba(255, 255, 255, 0.056);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25),
    inset 29.4px -29.4px 29.4px rgba(165, 165, 165, 0.056),
    inset -29.4px 29.4px 29.4px rgba(255, 255, 255, 0.056);
  backdrop-filter: blur(7px);
  padding: 40px;
  border-radius: 10px;
`;
