import React, { ReactNode } from "react";

import * as S from "./styles";

type TextInputProps = ReactNode & HTMLInputElement & { label: string };

export const TextInput = ({ label, ...rest }: TextInputProps) => {
  return (
    <S.Fieldset>
      <S.Input aria-label={label} {...rest} id={label} defaultValue="100%" />
    </S.Fieldset>
  );
};
