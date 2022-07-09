import { render } from "../../../.jest/render";
import TypesDisplay from ".";

describe("TypesDisplay", () => {
  it("renders", () => {
    const func = () => render(<TypesDisplay types={[]} />);

    expect(func).not.toThrow();
  });
});
