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
    height: "sm",
    fontSize: "md",
    borderRadius: "sm",
  },
  md: {
    height: "md",
    fontSize: "md",
  },
  lg: {
    height: "lg",
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
  transition: "filter 0.1s ease-out",

  ...(!disabled && {
    "&:hover": {
      filter: "brightness(1.15)",
    },
    "&:active": {
      filter: "brightness(0.95)",
    },
  }),
});
