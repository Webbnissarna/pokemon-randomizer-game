import type { MouseEvent as ReactMouseEvent } from "react";

export type Size = "sm" | "lg";

export type ClickEvent = ReactMouseEvent<HTMLButtonElement, MouseEvent>;

export interface BallProps {
  size: Size;
  disabled?: boolean;
  onClick?: (event: ClickEvent) => void;
}
