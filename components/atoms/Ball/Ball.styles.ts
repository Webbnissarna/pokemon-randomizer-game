import type { ThemeUIStyleObject } from "theme-ui";
import type { Size } from "./Ball.types";

export const containerStyle: ThemeUIStyleObject = {
  borderRadius: "50%",
  overflow: "hidden",
  transition: "transform 0.05s ease-out",
};

export const sizeMap: Record<Size, number> = {
  sm: 40,
  lg: 100,
};

export const activeStyle: ThemeUIStyleObject = {
  "&:hover": {
    cursor: "pointer",
  },

  "&:active": {
    transform: "scale(0.95)",
  },
};

export function getSizeStyle(size: Size): ThemeUIStyleObject {
  return {
    width: sizeMap[size],
    height: sizeMap[size],
  };
}
