import { render } from "../../../.jest/render";
import HomeControls from ".";

describe("HomeControls", () => {
  it("renders", () => {
    const func = () =>
      render(<HomeControls title="" onPlay={() => undefined} />);

    expect(func).not.toThrow();
  });
});
