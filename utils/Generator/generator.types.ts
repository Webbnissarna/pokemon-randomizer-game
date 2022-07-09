import type {
  PokemonInfo,
  Nature,
  BasicMoveInfo,
  Ability,
  MoveInfo,
  Type,
} from "./pokemon.types";

export interface GeneratedPokemonNoExport {
  info: PokemonInfo;
  nature: Nature;
  moves: MoveInfo[];
  ability: Ability;
}

export interface GeneratedPokemon extends GeneratedPokemonNoExport {
  showdownExport: string;
}

export type PokemonResolver = (dexNo: number) => Promise<PokemonInfo>;
export type BasicMoveResolver = (moveName: string) => Promise<BasicMoveInfo>;
export type MoveResolver = (moveName: string) => Promise<MoveInfo>;
export type MoveListResolver = (moveType: Type) => Promise<BasicMoveInfo[]>;
