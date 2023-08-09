import { colors, fonts, shadows } from "./tokens";

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