import React, { InputHTMLAttributes, ReactNode, Ref, forwardRef } from "react";

import * as S from "./styles";

type TextInputProps = {
  label?: string;
  rightSlot?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef(function TextInput(
  { label, rightSlot, ...rest }: TextInputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <S.Container>
      {rightSlot ? (
        <S.InputDiv>
          <input aria-label={label} id={label ?? rest.id} ref={ref} {...rest} />
          {rightSlot}
        </S.InputDiv>
      ) : (
        <S.Input aria-label={label} {...rest} id={label ?? rest.id} ref={ref} />
      )}
    </S.Container>
  );
});
