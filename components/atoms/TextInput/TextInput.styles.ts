import { ThemeUIStyleObject } from "theme-ui";

export const mainStyle: ThemeUIStyleObject = {
  borderRadius: "sm",
  border: "0px",
  backgroundColor: "inputBackground",
  color: "inputText",
  fontSize: "md",
  fontFamily: "inherit",
  height: "sm",
  paddingX: "md",

  "&:focus-visible, &:focus": {
    outline: "1px solid #999",
  },
};
