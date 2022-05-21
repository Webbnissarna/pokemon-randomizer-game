import { Flex, Text } from "theme-ui";
import Ball from "../../atoms/Ball";
import {
  ballContainerStyle,
  containerStyle,
  textStyle,
  variants,
} from "./PlayerInfo.styles";
import type { PlayerInfoProps } from "./PlayerInfo.types";

export default function PlayerInfo({
  playerName,
  variant,
  ballCount,
  pickedPokemon,
}: PlayerInfoProps): JSX.Element {
  const unpickedCount = ballCount - pickedPokemon.length;

  return (
    <Flex sx={{ ...variants[variant], ...containerStyle }}>
      <Text sx={textStyle}>{playerName}</Text>
      <Flex sx={ballContainerStyle}>
        {pickedPokemon.map((_, i) => (
          <Ball key={i} size="sm" disabled={false} onClick={() => undefined} />
        ))}

        {unpickedCount > 0 &&
          Array(unpickedCount)
            .fill(0)
            .map((_, i) => (
              <Ball
                key={i}
                size="sm"
                disabled={true}
                onClick={() => undefined}
              />
            ))}
      </Flex>
    </Flex>
  );
}
