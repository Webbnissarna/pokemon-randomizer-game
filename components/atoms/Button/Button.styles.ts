import { ThemeUIStyleObject } from "theme-ui";
import { Variant, Size } from "./Button.types";

export const variants: Record<Variant, ThemeUIStyleObject> = {
  positive: {
    color: "positiveText",
    background: "positive",
  },
  negative: {
    color: "negativeText",
    background: "negative",
  },
  neutral: {
    color: "neutralText",
    background: "neutral",
  },
  secondary: {
    color: "secondaryText",
    background: "secondary",
  },
  tertiary: {
    color: "tertiaryText",
    background: "tertiary",
  },
};

export const sizes: Record<Size, ThemeUIStyleObject> = {
  sm: {
    height: 40,
    fontSize: "md",
  },
  md: {
    height: 60,
    fontSize: "xl",
  },
};

export const disabledStyle: ThemeUIStyleObject = {
  filter: "brightness(0.6)",
  opacity: 0.8,
  cursor: "unset",
};

export const commonStyle = (disabled: boolean) => ({
  borderRadius: "md",
  boxShadow: "md",
  width: "100%",
  height: 40,
  fontSize: "md",
  fontFamily: "inherit",
  cursor: "pointer",
  transition: "transform 0.1s ease-out",

  ...(!disabled && {
    "&:hover": {
      transform: "scale(1.05)",
      filter: "brightness(1.15)",
    },
    "&:active": {
      transform: "scale(0.98)",
      filter: "brightness(0.95)",
    },
  }),
});
