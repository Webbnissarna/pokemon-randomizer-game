import { render } from "../../../.jest/render";
import SimplePokemonInfo from ".";

import Pikachu from "../../../public/data/pokemon/25.json";
import Pound from "../../../public/data/moves/1.json";
import Natures from "../../../public/data/naturesList.json";
import Abilities from "../../../public/data/abilitiesList.json";

import type { GeneratedPokemon } from "../../../utils/Generator/generator.types";
import type {
  PokemonInfo,
  Nature,
  BasicMoveInfo,
} from "../../../utils/Generator/pokemon.types";
import {
  GameProp,
  GamePropGetter,
} from "../../../utils/GamePropSystem/GamePropSystem.types";
import { toImgBase64PNG } from "../../../utils/Misc";

const mockPokemon: GeneratedPokemon = {
  info: Pikachu as PokemonInfo,
  nature: Natures[0] as Nature,
  showdownExport: "",
  ability: Abilities[0],
  moves: [Pound, Pound, Pound, Pound] as BasicMoveInfo[],
};

const MOCK_PROP: Required<GameProp> = {
  mainProp: "mainMock",
  optionalProp: "optionalMock",
};

const mockPropGetter: GamePropGetter<GeneratedPokemon> = (_) => MOCK_PROP;

describe("SimplePokemonInfo", () => {
  it("renders", () => {
    const func = () =>
      render(
        <SimplePokemonInfo
          gamePropGetter={mockPropGetter}
          pokemon={mockPokemon}
        />
      );

    expect(func).not.toThrow();
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
