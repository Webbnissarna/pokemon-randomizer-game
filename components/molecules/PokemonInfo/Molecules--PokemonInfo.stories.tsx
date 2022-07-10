import PokemonInfo from ".";
import { makeLangGetter } from "../../../utils/GamePropSystem/LangGamePropSystem";
import { mockPokemon } from "../../../utils/testHelper";

export function Default() {
  return (
    <PokemonInfo pokemon={mockPokemon} gamePropGetter={makeLangGetter("ja")} />
  );
}
