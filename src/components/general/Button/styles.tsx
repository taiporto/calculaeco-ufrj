import { styled } from "@xstyled/styled-components";

export const Button = styled.buttonBox`
  width: 100%;
  font-size: 1rem;
  padding: 16px;
  border-radius: 10px;
  color: neutral0;
  background-color: neutral100;
  border: none;
  transition: all 0.2s;

  &:hover {
    background-color: neutral80;
    cursor: pointer;
  }
`;
