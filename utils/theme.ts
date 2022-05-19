import { Theme, useThemeUI, ThemeUIContextValue } from "theme-ui";

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  colors: {
    text: "#000",
    background:
      "linear-gradient(0deg, rgba(255,172,252,1) 0%, rgba(157,214,255,1) 100%);",

    ball: {
      active: {
        top: "#ff6060",
        middle: "#606060",
        bottom: "#ffffff",
      },
      disabled: {
        top: "#4f4f4f",
        middle: "#414141",
        bottom: "#838383",
      },
    },

    positive: "#73FF67",
    positiveText: "#333333",
    negative: "#B30000",
    negativeText: "#FFFFFF",
    neutral: "#67C8FF",
    neutralText: "#000000",
    secondary: "#4E7999",
    secondaryText: "#FFFFFF",
    tertiary: "#FFFFFF",
    tertiaryText: "#000000",

    inputBackground: "#D0D0D0",
    inputText: "#3D3D3D",

    contentBackground: "#FFFFFF",
  },
  fonts: {
    body: "'Noto Sans JP', sans-serif",
    heading: "'Noto Sans JP', sans-serif",
  },
  shadows: {
    sm: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
    md: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",

    svgFilter: {
      sm: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 2px)",
      md: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px)",
    },
  },
  radii: {
    sm: 5,
    md: 10,
  },
  space: {
    md: 10,
    lg: 18,
    xl: 40,
  },
  sizes: {
    sm: 30,
    md: 40,
    lg: 60,
  },
  fontSizes: {
    xxs: 9,
    xs: 10,
    sm: 12,
    md: 14,
    lg: 18,
    xl: 24,
  },

  styles: {
    root: {
      fontFamily: "body",

      h1: {
        fontSize: "xl",
      },
    },
  },
});

export default theme;
export type ThemeType = typeof theme;

interface ExactContextValue extends Omit<ThemeUIContextValue, "theme"> {
  theme: ThemeType;
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue;
