import { Flex, Box, Text } from "theme-ui";

import { getStatColor, StatShortNames } from "../../../utils/pokemonMeta";
import {
  containerStyle,
  statContainerStyle,
  statStyle,
  textStyle,
} from "./NatureDisplay.styles";

import type { Stat } from "../../../utils/Generator/pokemon.types";
import type { NatureDisplayProps } from "./NatureDisplay.types";

export default function NatureDisplay({
  nature,
}: NatureDisplayProps): JSX.Element {
  return (
    <Flex sx={containerStyle}>
      <Text sx={textStyle}>{nature.name.en}</Text>
      <Flex sx={statContainerStyle}>
        <Box
          sx={{
            ...statStyle,
            backgroundColor: getStatColor(nature.increasedStat as Stat),
          }}
        >
          <Text sx={textStyle}>
            {nature.increasedStat
              ? `+${StatShortNames[nature.increasedStat]}`
              : "—"}
          </Text>
        </Box>
        <Box
          sx={{
            ...statStyle,
            backgroundColor: getStatColor(nature.decreasedStat as Stat),
          }}
        >
          <Text sx={textStyle}>
            {nature.decreasedStat
              ? `-${StatShortNames[nature.decreasedStat]}`
              : "—"}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
