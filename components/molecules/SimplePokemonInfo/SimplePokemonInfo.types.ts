import type { GamePropGetter } from "../../../utils/GamePropSystem/GamePropSystem.types";
import type { GeneratedPokemon } from "../../../utils/Generator/generator.types";

export interface SimplePokemoninfoProps {
  pokemon: GeneratedPokemon;
  gamePropGetter: GamePropGetter<GeneratedPokemon>;
}
