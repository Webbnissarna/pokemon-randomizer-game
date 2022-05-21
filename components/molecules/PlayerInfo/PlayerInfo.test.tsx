import { screen } from "@testing-library/react";
import { render } from "../../../.jest/render";
import PlayerInfo from ".";
import { GeneratedPokemon } from "../../../utils/Generator/generator.types";

describe("PlayerInfo", () => {
  it("renders", () => {
    const func = () =>
      render(
        <PlayerInfo
          playerName=""
          variant="br"
          ballCount={0}
          pickedPokemon={[]}
        />
      );

    expect(func).not.toThrow();
  });

  it("shows the player name", () => {
    const playerName = "Random player name";

    render(
      <PlayerInfo
        playerName={playerName}
        variant={"br"}
        ballCount={0}
        pickedPokemon={[]}
      />
    );

    const element = screen.getByText(playerName);

    expect(element).toBeTruthy();
  });

  it("shows the correct amount of balls", () => {
    const ballCount = 6;

    render(
      <PlayerInfo
        playerName=""
        variant={"br"}
        ballCount={ballCount}
        pickedPokemon={[]}
      />
    );

    const elements = screen.getAllByRole("button");

    expect(elements).toHaveLength(ballCount);
  });

  it("handles invalid ball count", () => {
    const ballCount = -1;

    render(
      <PlayerInfo
        playerName=""
        variant={"br"}
        ballCount={ballCount}
        pickedPokemon={[]}
      />
    );

    const element = screen.queryByRole("button");

    expect(element).toBeNull();
  });

  it("always shows enough ball for all picked Pokémon", () => {
    const ballCount = 6;
    const pickedCount = 3;
    const mockPicked = Array(pickedCount).fill({}) as GeneratedPokemon[];

    render(
      <PlayerInfo
        playerName=""
        variant={"br"}
        ballCount={ballCount}
        pickedPokemon={mockPicked}
      />
    );

    const elements = screen.getAllByRole("button");
    const disabledElements = elements.filter((element) =>
      element.hasAttribute("disabled")
    );

    expect(disabledElements).toHaveLength(ballCount - pickedCount);
  });
});
