import type { GeneratedPokemon } from "../../../utils/Generator/generator.types";

export type Variant = "tl" | "br";

export interface PlayerInfoProps {
  playerName: string;
  variant: Variant;
  ballCount: number;
  pickedPokemon: GeneratedPokemon[];
}
