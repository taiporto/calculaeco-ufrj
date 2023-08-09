import { colors } from "./colors";
import { shadows } from "./shadows";
import { fonts } from "./fonts";

export const theme = {
  colors: {
    ...colors,
  },
  shadows: {
    ...shadows,
  },
  fonts: {
    ...fonts,
  }
} as const;