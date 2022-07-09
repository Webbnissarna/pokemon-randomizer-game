import type {
  GameProp,
  GamePropGetter,
} from "./GamePropSystem/GamePropSystem.types";
import type { GeneratedPokemon } from "./Generator/generator.types";
import type { PokemonInfo, Nature, MoveInfo } from "./Generator/pokemon.types";

import Pikachu from "../public/data/pokemon/25.json";
import Pound from "../public/data/moves/1.json";
import KarateChop from "../public/data/moves/2.json";
import Fly from "../public/data/moves/19.json";
import Thunder from "../public/data/moves/87.json";
import Natures from "../public/data/naturesList.json";
import Abilities from "../public/data/abilitiesList.json";

export const MOCK_PROP: Required<GameProp> = {
  mainProp: "mainMock",
  optionalProp: "optionalMock",
};

export const MOCK_NATURE = Natures[15] as Nature;

export const mockPropGetter: GamePropGetter<GeneratedPokemon> = (_) =>
  MOCK_PROP;

export const mockPokemon: GeneratedPokemon = {
  info: Pikachu as PokemonInfo,
  nature: MOCK_NATURE,
  showdownExport: "",
  ability: Abilities[0],
  moves: [Pound, KarateChop, Fly, Thunder] as MoveInfo[],
};
