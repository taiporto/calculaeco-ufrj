import React, { PropsWithChildren } from "react";

import { Button as StyledButton } from "./styles";

type ButtonProps = PropsWithChildren<
  | React.HTMLProps<HTMLButtonElement>
  | React.HTMLProps<HTMLInputElement>
  | React.ComponentProps<typeof StyledButton>
>;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
