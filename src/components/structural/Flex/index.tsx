import React, { PropsWithChildren } from "react";
import { styled } from "@xstyled/styled-components";

const StyledFlex = styled.divBox`
  display: flex;
`;

export const Flex = ({ children }: PropsWithChildren) => {
  return <StyledFlex>{children}</StyledFlex>;
};
