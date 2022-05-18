import type {
  PokemonInfo,
  Nature,
  BasicMoveInfo,
  Ability,
} from "./pokemon.types";

export interface GeneratedPokemonNoExport {
  info: PokemonInfo;
  nature: Nature;
  moves: BasicMoveInfo[];
  ability: Ability;
}

export interface GeneratedPokemon extends GeneratedPokemonNoExport {
  showdownExport: string;
}

export type PokemonResolver = (dexNo: number) => Promise<PokemonInfo>;
export type MoveResolver = (moveName: string) => Promise<BasicMoveInfo>;
export type MoveListResolver = (moveType: string) => Promise<BasicMoveInfo[]>;
