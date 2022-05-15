import type { MouseEvent as ReactMouseEvent } from "react";

export type Variant =
  | "positive"
  | "negative"
  | "neutral"
  | "secondary"
  | "tertiary";

export type Size = "sm" | "md" | "lg";

export type ClickEvent = ReactMouseEvent<HTMLButtonElement, MouseEvent>;

export interface ButtonProps {
  text: string;
  variant: Variant;
  size: Size;
  onClick: (event: ClickEvent) => void;
  disabled?: boolean;
}
