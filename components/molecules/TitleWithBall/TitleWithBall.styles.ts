import { ThemeUIStyleObject } from "theme-ui";

export const rootStyle: ThemeUIStyleObject = {
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  height: 250,
};

export const ballContainerStyle: ThemeUIStyleObject = {
  width: 250,
  height: 250,
  position: "absolute",
  top: 0,
  zIndex: 0,
  left: "calc(50% - 125px)",
};

export const titleContainerStyle: ThemeUIStyleObject = {
  zIndex: 1,
  position: "relative",
  width: "100%",
};

export const titleStyle: ThemeUIStyleObject = {
  textAlign: "center",
};
