import { render } from "../../../.jest/render";
import SimpleBall from ".";

describe("SimpleBall", () => {
  it("renders", () => {
    const func = () => render(<SimpleBall size={100} />);

    expect(func).not.toThrow();
  });
});
