import React, { InputHTMLAttributes, Ref, forwardRef } from "react";

import * as S from "./styles";

type TextInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef(function TextInput(
  { label, ...rest }: TextInputProps,
  ref: Ref<HTMLInputElement>
) {
  //TODO: Review the need for a fieldset here
  return (
    <S.Fieldset>
      <S.Input
        aria-label={label}
        {...rest}
        id={label ?? rest.id}
        ref={ref}
        defaultValue="100%"
      />
    </S.Fieldset>
  );
});
