import type { ThemeUIStyleObject } from "theme-ui";

export const containerStyle: ThemeUIStyleObject = {
  width: "min(380px, 90vw)",
  flexDirection: "column",
  backgroundColor: "contentBackground",
  borderRadius: "md",
  boxShadow: "md",
  justifyContent: "center",
  gap: "md",
  paddingY: "md",
};

export const upperContentStyle: ThemeUIStyleObject = {
  paddingX: "md",
  gap: "sm",
};

export const halfBasisStyle: ThemeUIStyleObject = { flexBasis: "50%" };

export const mainInfoContainerStyle: ThemeUIStyleObject = {
  flexDirection: "column",
  gap: "sm",
};

export const movesContainerStyle: ThemeUIStyleObject = {
  flexDirection: "column",
  gap: "sm",
};
