import { colors } from "./colors";

export const shadows = {
  light: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
  medium: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  strong: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
  popover: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  'popover-highlight': `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${colors.orange80}`,
  tooltip: 'hsl(206 22% 7% / 35%) 0px 10px 28px -5px, hsl(206 22% 7% / 20%) 0px 10px 10px -10px',
  'extra-strong': 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
  stroke: `0 0 0 1px ${colors.neutral20}`,
  'stroke-highlight-light': `0 0 0 2px ${colors.orange50}`,
  'stroke-highlight-medium': `0 0 0 4px ${colors.orange50}`,
} as const;