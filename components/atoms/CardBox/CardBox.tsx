import { Flex } from "theme-ui";
import { mainStyle } from "./CardBox.styles";
import type { CardBoxProps } from "./CardBox.types";

export default function CardBox({ children }: CardBoxProps): JSX.Element {
  return <Flex sx={mainStyle}>{children}</Flex>;
}
