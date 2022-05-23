import SimplePokemonInfo from ".";
import type { GeneratedPokemon } from "../../../utils/Generator/generator.types";
import type {
  PokemonInfo,
  Nature,
  BasicMoveInfo,
} from "../../../utils/Generator/pokemon.types";
import { makeLangGetter } from "../../../utils/GamePropSystem/LangGamePropSystem";
import Pikachu from "../../../public/data/pokemon/25.json";
import Pound from "../../../public/data/moves/1.json";
import Natures from "../../../public/data/naturesList.json";
import Abilities from "../../../public/data/abilitiesList.json";

export function Default() {
  const mockPokemon: GeneratedPokemon = {
    info: Pikachu as PokemonInfo,
    nature: Natures[0] as Nature,
    showdownExport: "",
    ability: Abilities[0],
    moves: [Pound, Pound, Pound, Pound] as BasicMoveInfo[],
  };

  return (
    <SimplePokemonInfo
      pokemon={mockPokemon}
      gamePropGetter={makeLangGetter("ja")}
    />
  );
}
