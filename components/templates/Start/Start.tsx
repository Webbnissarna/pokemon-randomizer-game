import { Box, Flex } from "theme-ui";

import { contentContainerStyle, mainContainerStyle } from "./Start.styles";
import BackgroundWrapper from "../../atoms/BackgroundWrapper";
import HomeControls from "../../organisms/HomeControls";

import type { StartProps } from "./Start.types";

export default function Start({
  title,
  sourceLink,
  sourceLinkTitle,
  onPlay,
}: StartProps): JSX.Element {
  return (
    <Box sx={mainContainerStyle}>
      <BackgroundWrapper>
        <Flex sx={contentContainerStyle}>
          <HomeControls title={title} onPlay={onPlay} />
          <a href={sourceLink}>{sourceLinkTitle}</a>
        </Flex>
      </BackgroundWrapper>
    </Box>
  );
}
