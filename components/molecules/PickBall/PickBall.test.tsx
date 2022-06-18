import PickBall from ".";
import { render } from "../../../.jest/render";
import {
  mockPokemon,
  mockPropGetter,
  MOCK_PROP,
} from "../../../utils/testHelper";

describe("PickBall", () => {
  it("renders", () => {
    const func = () =>
      render(
        <PickBall
          gamePropGetter={mockPropGetter}
          pokemon={mockPokemon}
          onClick={() => undefined}
          showPokemon={false}
          showStar={false}
        />
      );

    expect(func).not.toThrow();
  });

  it("shows GameProp properties", () => {
    const { getByText } = render(
      <PickBall
        gamePropGetter={mockPropGetter}
        pokemon={mockPokemon}
        onClick={() => undefined}
        showPokemon={false}
        showStar={false}
      />
    );

    expect(getByText(MOCK_PROP.mainProp)).toBeTruthy();
    expect(getByText(MOCK_PROP.optionalProp)).toBeTruthy();
  });
});
