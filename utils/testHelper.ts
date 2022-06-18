import type {
  GameProp,
  GamePropGetter,
} from "./GamePropSystem/GamePropSystem.types";
import type { GeneratedPokemon } from "./Generator/generator.types";
import type {
  PokemonInfo,
  Nature,
  BasicMoveInfo,
} from "./Generator/pokemon.types";

import Pikachu from "../public/data/pokemon/25.json";
import Pound from "../public/data/moves/1.json";
import Natures from "../public/data/naturesList.json";
import Abilities from "../public/data/abilitiesList.json";

export const MOCK_PROP: Required<GameProp> = {
  mainProp: "mainMock",
  optionalProp: "optionalMock",
};

export const mockPropGetter: GamePropGetter<GeneratedPokemon> = (_) =>
  MOCK_PROP;

export const mockPokemon: GeneratedPokemon = {
  info: Pikachu as PokemonInfo,
  nature: Natures[0] as Nature,
  showdownExport: "",
  ability: Abilities[0],
  moves: [Pound, Pound, Pound, Pound] as BasicMoveInfo[],
};
