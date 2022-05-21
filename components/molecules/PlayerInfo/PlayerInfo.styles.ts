import type { ThemeUIStyleObject } from "theme-ui";
import type { Variant } from "./PlayerInfo.types";

export const variants: Record<Variant, ThemeUIStyleObject> = {
  tl: {
    flexDirection: "column",
    textAlign: "left",
  },
  br: {
    flexDirection: "column-reverse",
    textAlign: "right",
  },
};

export const containerStyle: ThemeUIStyleObject = {
  width: "fit-content",
  gap: "md",
};

export const textStyle: ThemeUIStyleObject = {
  fontSize: "lg",
};

export const ballContainerStyle: ThemeUIStyleObject = { gap: "md" };
