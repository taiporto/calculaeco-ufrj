import { createStitches } from "@stitches/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      orange140: "#AC5300",
      orange120: "#CA6609",
      orange100: "#E57915",
      orange80: "#E89242",
      orange50: "#ECB684",
      orange30: "#F1D0B2",
      orange15: "#F2E2D3",
      neutral110: "#000000",
      neutral100: "#0C0C0E",
      neutral80: "#3B3B3C",
      neutral60: "#69696A",
      neutral40: "#989898",
      neutral20: "#C6C6C7",
      neutral10: "#DEDEDE",
      neutral5: "#E4E4E4",
      neutral0: "#FFFFFF",
    },
    shadows: {
      orange140: "#AC5300",
      orange120: "#CA6609",
      orange100: "#E57915",
      orange80: "#E89242",
      orange50: "#ECB684",
      orange30: "#F1D0B2",
      orange15: "#F2E2D3",
      neutral110: "#000000",
      neutral100: "#0C0C0E",
      neutral80: "#3B3B3C",
      neutral60: "#69696A",
      neutral40: "#989898",
      neutral20: "#C6C6C7",
      neutral10: "#DEDEDE",
      neutral5: "#E4E4E4",
      neutral0: "#FFFFFF",
    },
    fonts: {
      inter: `${inter.style.fontFamily}, sans-serif`,
    },
  },
});
