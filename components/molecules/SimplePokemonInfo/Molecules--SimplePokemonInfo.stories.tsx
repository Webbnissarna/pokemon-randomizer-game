import SimplePokemonInfo from ".";
import { makeLangGetter } from "../../../utils/GamePropSystem/LangGamePropSystem";
import { mockPokemon } from "../../../utils/testHelper";

export function Default() {
  return (
    <SimplePokemonInfo
      pokemon={mockPokemon}
      gamePropGetter={makeLangGetter("ja")}
    />
  );
}
