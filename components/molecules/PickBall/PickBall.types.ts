import { MouseEvent as ReactMouseEvent } from "react";
import { GamePropGetter } from "../../../utils/GamePropSystem/GamePropSystem.types";
import { GeneratedPokemon } from "../../../utils/Generator/generator.types";

export type ClickEvent = ReactMouseEvent<HTMLButtonElement, MouseEvent>;
export interface PickBallProps {
  pokemon: GeneratedPokemon;
  gamePropGetter: GamePropGetter<GeneratedPokemon>;
  showPokemon: boolean;
  showStar: boolean;
  onClick: (event: ClickEvent) => void;
}
