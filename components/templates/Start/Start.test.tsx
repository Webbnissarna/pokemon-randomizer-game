import { render } from "../../../.jest/render";
import Start from ".";

describe("Start", () => {
  it("renders", () => {
    const { asFragment } = render(
      <Start
        title="Lorem ipsum dolor sit amet"
        sourceLink="https://github.com/Webbnissarna/pokemon-randomizer-game"
        sourceLinkTitle="GitHub"
        onPlay={(options) => console.log("onPlay!", options)}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
