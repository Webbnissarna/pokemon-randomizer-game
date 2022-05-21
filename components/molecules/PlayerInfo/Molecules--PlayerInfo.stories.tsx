import { Flex } from "theme-ui";
import PlayerInfo from ".";
import Abilities from "../../../public/data/abilitiesList.json";
import Pound from "../../../public/data/moves/1.json";
import Natures from "../../../public/data/naturesList.json";
import Pikachu from "../../../public/data/pokemon/25.json";
import type { GeneratedPokemon } from "../../../utils/Generator/generator.types";
import type {
  BasicMoveInfo,
  Nature,
  PokemonInfo,
} from "../../../utils/Generator/pokemon.types";
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
  const mockPokemon: GeneratedPokemon = {
    info: Pikachu as PokemonInfo,
    nature: Natures[0] as Nature,
    showdownExport: "",
    ability: Abilities[0],
    moves: [Pound, Pound, Pound, Pound] as BasicMoveInfo[],
  };

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
