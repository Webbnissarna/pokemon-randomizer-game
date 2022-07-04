import { Box } from "theme-ui";
import { mainStyle } from "./BackgroundWrapper.styles";
import type { BackgroundWrapperProps } from "./BackgroundWrapper.types";

export default function BackgroundWrapper({
  children,
}: BackgroundWrapperProps): JSX.Element {
  return <Box sx={mainStyle}>{children}</Box>;
}
