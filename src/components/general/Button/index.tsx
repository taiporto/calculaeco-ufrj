import React, { FormEvent, PropsWithChildren, ReactNode } from "react";

import * as S from "./styles";

type ButtonProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.InputHTMLAttributes<HTMLInputElement>
>;

const Button = ({ children, ...props }: ButtonProps) => {
  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> &
      React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const button = event.currentTarget;

    if (button) button.textContent = "Loading...";

    props.onClick?.(event);
  };

  return (
    <S.Button onClick={handleOnClick} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
