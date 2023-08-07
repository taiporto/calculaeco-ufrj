import { globalCss, styled } from "../../stitches.config";

export const globalStyles = globalCss({
  '*': {
    fontFamily: '$inter',
  },
  body: {
    margin: 0,
    padding: 0,
    height: '100dvh',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background:
      "$neutral0",
  },
  'div#__next': {
    width: '100%',
  },
  main: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  p: {
    margin: 0
  }
});

export const FormContainer = styled('div', {
  margin: '24px',
  width: '40%',
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.056)',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25), inset 29.4px -29.4px 29.4px rgba(165, 165, 165, 0.056), inset -29.4px 29.4px 29.4px rgba(255, 255, 255, 0.056)',
  backdropFilter: 'blur(7px)',
  padding: "40px",
  borderRadius: "10px",
})
