import { render } from "../../../.jest/render";
import Star from ".";

describe("Star", () => {
  it("renders", () => {
    const func = () => render(<Star size={100} visible={true} />);

    expect(func).not.toThrow();
  });
});
