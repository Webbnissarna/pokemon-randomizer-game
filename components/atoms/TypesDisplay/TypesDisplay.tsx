import { Flex, Box, Text } from "theme-ui";

import { containerStyle, textStyle, typeBoxStyle } from "./TypesDisplay.styles";
import { TypeColors } from "../../../utils/pokemonMeta";

import type { TypesDisplayProps } from "./TypesDisplay.types";

export default function TypesDisplay({
  types,
}: TypesDisplayProps): JSX.Element {
  return (
    <Flex sx={containerStyle}>
      {types.map((type) => (
        <Box
          key={type}
          sx={{ ...typeBoxStyle, backgroundColor: TypeColors[type] }}
        >
          <Text sx={textStyle}>{type}</Text>
        </Box>
      ))}
    </Flex>
  );
}
