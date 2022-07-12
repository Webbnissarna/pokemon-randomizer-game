import { render } from "../../../.jest/render";
import PokemonInfo from ".";
import { mockPokemon, mockPropGetter } from "../../../utils/testHelper";

describe("PokemonInfo", () => {
  it("renders", () => {
    const func = () =>
      render(
        <PokemonInfo pokemon={mockPokemon} gamePropGetter={mockPropGetter} />
      );

    expect(func).not.toThrow();
  });
});
