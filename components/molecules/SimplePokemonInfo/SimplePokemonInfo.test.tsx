import SimplePokemonInfo from ".";
import { render } from "../../../.jest/render";
import { toImgBase64PNG } from "../../../utils/Misc";
import {
  mockPokemon,
  mockPropGetter,
  MOCK_PROP,
} from "../../../utils/testHelper";

describe("SimplePokemonInfo", () => {
  it("renders", () => {
    const { asFragment } = render(
      <SimplePokemonInfo
        gamePropGetter={mockPropGetter}
        pokemon={mockPokemon}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows GameProp properties", () => {
    const { getByText } = render(
      <SimplePokemonInfo
        gamePropGetter={mockPropGetter}
        pokemon={mockPokemon}
      />
    );

    expect(getByText(MOCK_PROP.mainProp)).toBeTruthy();
    expect(getByText(MOCK_PROP.optionalProp)).toBeTruthy();
  });

  it("shows the image", () => {
    const { getByAltText } = render(
      <SimplePokemonInfo
        gamePropGetter={mockPropGetter}
        pokemon={mockPokemon}
      />
    );

    const imageElement = getByAltText(mockPokemon.info.name.en as string);

    expect(imageElement instanceof HTMLImageElement).toBe(true);
    expect((imageElement as HTMLImageElement).src).toBe(
      toImgBase64PNG(mockPokemon.info.imageData)
    );
  });
});
