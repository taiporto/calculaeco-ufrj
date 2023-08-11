import { styled, css } from "@xstyled/styled-components";

const inputPadding = "0 10px";
const inputRadius = "8px";

const inputStyles = css`
  all: unset;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  font-size: 16px;
  line-height: 1;
  color: neutral100;
  box-shadow: stroke;
  background-color: neutral0;
  height: 36px;

  &:focus-within {
    box-shadow: stroke-highlight-light;
  }
`;

export const Container = styled.divBox`
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
  ${inputStyles}
`;

export const InputDiv = styled.divBox`
  ${inputStyles}
  padding-left: 0;

  input {
    height: 100%;
    width: 100%;
    padding: ${inputPadding};
    border-radius: ${inputRadius};

    &:focus {
      outline: none;
    }
  }
`;

export const Text = styled.pBox`
  margin: 0;
  color: orange30;
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
`;
