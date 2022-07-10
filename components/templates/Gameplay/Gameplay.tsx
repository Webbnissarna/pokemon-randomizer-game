import type { ThemeUIStyleObject } from "theme-ui";
import { Flex } from "theme-ui";

const contentContainerStyle: ThemeUIStyleObject = {
  flexDirection: "column",
  alignItems: "center",
  gap: "lg",
  paddingTop: "xl",
};

interface GameplayProps {}

export default function Gameplay({}: GameplayProps): JSX.Element {
  return <Flex sx={contentContainerStyle}></Flex>;
}
