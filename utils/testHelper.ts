import mockPokemonData from "./testMockData/pokemon.json";
import mockAbilityData from "./testMockData/ability.json";
import mockNatureData from "./testMockData/nature.json";
import mockMove1 from "./testMockData/move1.json";
import mockMove2 from "./testMockData/move2.json";
import mockMove3 from "./testMockData/move3.json";
import mockMove4 from "./testMockData/move4.json";

import type {
  GameProp,
  GamePropGetter,
} from "./GamePropSystem/GamePropSystem.types";
import type { GeneratedPokemon } from "./Generator/generator.types";
import type {
  PokemonInfo,
  Nature,
  MoveInfo,
  Ability,
} from "./Generator/pokemon.types";

export const MOCK_PROP: Required<GameProp> = {
  mainProp: "mainMock",
  optionalProp: "optionalMock",
};

export const MOCK_NATURE = mockNatureData as Nature;
export const MOCK_ABILITY = mockAbilityData as Ability;
export const MOCK_IMAGEDATA = mockPokemonData.imageData;

export const mockPropGetter: GamePropGetter<GeneratedPokemon> = (_) =>
  MOCK_PROP;

export const mockPokemon: GeneratedPokemon = {
  info: mockPokemonData as PokemonInfo,
  nature: MOCK_NATURE,
  showdownExport: "",
  ability: MOCK_ABILITY,
  moves: [mockMove1, mockMove2, mockMove3, mockMove4] as MoveInfo[],
};
