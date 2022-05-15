import { render } from "../../../.jest/render";
import Setup from ".";

describe("Setup", () => {
  it("renders", () => {
    const func = () => render(<Setup onPlay={() => undefined} />);

    expect(func).not.toThrow();
  });
});
