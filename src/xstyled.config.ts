import { defaultTheme } from "@xstyled/styled-components";

import { theme as customTheme } from "./theme";

export const theme = {
  ...defaultTheme,
  ...customTheme,
};
