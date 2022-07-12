import { Flex, Box, Text } from "theme-ui";
import {
  TypeColors,
  getLatestUsefulMoveDescription,
} from "../../../utils/pokemonMeta";
import {
  containerStyle,
  innerStyle,
  nameTextStyle,
  textStyle,
} from "./MoveDisplay.styles";
import type { MoveDisplayProps } from "./MoveDisplay.types";

export default function MoveDisplay({ move }: MoveDisplayProps): JSX.Element {
  return (
    <Flex
      sx={{
        ...containerStyle,
        backgroundColor: TypeColors[move.type],
      }}
    >
      <Flex sx={innerStyle}>
        <Box>
          <Text>{move.type}</Text>
        </Box>
        <Text>{move.category}</Text>
        <Text sx={nameTextStyle}>{move.name.en}</Text>
        <Text>{move.power}</Text>
        <Text>{move.pp} PP</Text>
        <Text>{move.accuracy}%</Text>
      </Flex>
      <Text sx={textStyle}>
        {getLatestUsefulMoveDescription(move.description).desc}
      </Text>
    </Flex>
  );
}
