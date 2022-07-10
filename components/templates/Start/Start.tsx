import { Flex } from "theme-ui";

import { contentContainerStyle } from "./Start.styles";
import HomeControls from "../../organisms/HomeControls";

import type { StartProps } from "./Start.types";

export default function Start({
  title,
  sourceLink,
  sourceLinkTitle,
  onPlay,
}: StartProps): JSX.Element {
  return (
    <Flex sx={contentContainerStyle}>
      <HomeControls title={title} onPlay={onPlay} />
      <a href={sourceLink}>{sourceLinkTitle}</a>
    </Flex>
  );
}
