import { render } from "../../../.jest/render";
import Start from ".";

describe("Start", () => {
  it("renders", () => {
    const func = () =>
      render(
        <Start
          title="Lorem ipsum dolor sit amet"
          sourceLink="https://github.com/Webbnissarna/pokemon-randomizer-game"
          sourceLinkTitle="GitHub"
          onPlay={(options) => console.log("onPlay!", options)}
        />
      );

    expect(func).not.toThrow();
  });
});
