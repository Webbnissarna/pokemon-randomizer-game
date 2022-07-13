import { render } from "../../../.jest/render";
import Setup from ".";

describe("Setup", () => {
  it("renders", () => {
    const { asFragment } = render(<Setup onPlay={() => undefined} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
