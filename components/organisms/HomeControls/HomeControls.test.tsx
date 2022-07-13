import { render } from "../../../.jest/render";
import HomeControls from ".";

describe("HomeControls", () => {
  it("renders", () => {
    const { asFragment } = render(
      <HomeControls title="" onPlay={() => undefined} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
