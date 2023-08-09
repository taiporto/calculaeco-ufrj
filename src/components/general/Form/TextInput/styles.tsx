import { th, styled } from "@xstyled/styled-components";

export const Fieldset = styled.fieldsetBox`
  all: unset;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Label = styled.labelBox`
  font-size: 13px;
  color: orange80;
  width: 75px;
`;

export const Input = styled.inputBox`
  all: unset;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 16px;
  line-height: 1;
  color: neutral100;
  box-shadow: stroke;
  background-color: neutral0;
  height: 36px;

  &:focus {
    box-shadow: "stroke.highlight";
  }
`;

export const Text = styled.pBox`
  margin: 0;
  color: orange30;
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
`;
