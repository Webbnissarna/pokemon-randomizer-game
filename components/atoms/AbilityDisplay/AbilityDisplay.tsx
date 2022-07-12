import { Flex, Box, Text } from "theme-ui";
import {
  containerStyle,
  descriptionStyle,
  descriptionTextStyle,
  titleStyle,
} from "./AbilityDisplay.styles";
import type { AbilityDisplayProps } from "./AbilityDisplay.types";

export default function AbilityDisplay({
  ability,
}: AbilityDisplayProps): JSX.Element {
  return (
    <Flex sx={containerStyle}>
      <Text sx={titleStyle}>{ability.name.en}</Text>
      <Box sx={descriptionStyle}>
        <Text sx={descriptionTextStyle}>{ability.description}</Text>
      </Box>
    </Flex>
  );
}
