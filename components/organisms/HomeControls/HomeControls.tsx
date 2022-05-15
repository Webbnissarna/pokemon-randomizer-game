import { Flex } from "theme-ui";
import Setup from "../../molecules/Setup";
import TitleWithBall from "../../molecules/TitleWithBall";
import { mainContainerStyle } from "./HomeControls.styles";
import type { HomeControlsProps } from "./HomeControls.types";

export default function HomeControls({
  title,
  onPlay,
}: HomeControlsProps): JSX.Element {
  return (
    <Flex sx={mainContainerStyle}>
      <TitleWithBall text={title} />
      <Setup onPlay={onPlay} />
    </Flex>
  );
}
