import { Flex } from "theme-ui";
import PlayerInfo from ".";
import { mockPokemon } from "../../../utils/testHelper";
import type { Variant } from "./PlayerInfo.types";

interface ControlProps {
  playerName: string;
  variant: Variant;
  ballCount: number;
  pickedCount: number;
}

export function Default({
  playerName,
  variant,
  ballCount,
  pickedCount,
}: ControlProps): JSX.Element {
  return (
    <Flex sx={{ flexDirection: "column", gap: 20 }}>
      <h1>Custom</h1>
      <PlayerInfo
        variant={variant}
        ballCount={ballCount}
        playerName={playerName}
        pickedPokemon={
          pickedCount > 0 ? Array(pickedCount).fill(mockPokemon) : []
        }
      />

      <h1>Preset</h1>
      <PlayerInfo
        variant="tl"
        ballCount={6}
        playerName={"Player 1 Name"}
        pickedPokemon={[mockPokemon, mockPokemon, mockPokemon]}
      />
      <PlayerInfo
        variant="br"
        ballCount={6}
        playerName={"Player 2 Name"}
        pickedPokemon={[mockPokemon, mockPokemon]}
      />
    </Flex>
  );
}

Default.args = {
  playerName: "Player Name",
  variant: "tl",
  ballCount: 6,
  pickedCount: 3,
} as ControlProps;

Default.argTypes = {
  variant: {
    options: ["tl", "br"],
    control: { type: "select" },
  },
};
