import { ThemeUIStyleObject } from "theme-ui";

export const containerStyle: ThemeUIStyleObject = {
  "& > div:first-of-type label": {
    borderTopLeftRadius: "md",
    borderBottomLeftRadius: "md",
  },
  "& > div:last-of-type label": {
    borderTopRightRadius: "md",
    borderBottomRightRadius: "md",
  },
};

export const valueRootStyle: ThemeUIStyleObject = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& input": {
    display: "none",
  },

  "& input:checked ~ label": {
    color: "secondaryText",
    backgroundColor: "secondary",
    filter: "brightness(0.6)",
    opacity: 0.8,
    cursor: "unset",
  },

  "& input:not(:checked) ~ label": {
    "&:hover": {
      filter: "brightness(1.15)",
    },
    "&:active": {
      filter: "brightness(0.95)",
    },
  },
};

export const labelStyle: ThemeUIStyleObject = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "neutralText",
  backgroundColor: "neutral",
  height: "sm",
  fontFamily: "inherit",
  fontSize: "md",
  boxShadow: "md",
  cursor: "pointer",

  transition:
    "filter 0.1s ease-out, background 0.1s ease-out, color 0.1s ease-out",
};
