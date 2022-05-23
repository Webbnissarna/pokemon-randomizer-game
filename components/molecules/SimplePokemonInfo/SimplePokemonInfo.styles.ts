import type { ThemeUIStyleObject } from "theme-ui";

export const containerStyle: ThemeUIStyleObject = {
  width: "min(380px, 90vw)",
  height: 400,
  backgroundColor: "contentBackground",
  borderRadius: "md",
  boxShadow: "md",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "sm",
};

export const imageContainerStyle: ThemeUIStyleObject = {
  width: 260,
  height: 260,
  padding: "sm",
  backgroundColor: "inputBackground",
  borderRadius: "md",
};
