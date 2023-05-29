import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    height: '100dvh',
    fontFamily: '$inter',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'center',
    background:
      "radial-gradient($orange30, $orange15, $neutral0), $neutral0",
  },
  p: {
    margin: 0
  }
});
