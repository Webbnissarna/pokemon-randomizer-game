import { render } from "../../../.jest/render";
import TypesDisplay from ".";

describe("TypesDisplay", () => {
  it("renders", () => {
    const { asFragment } = render(<TypesDisplay types={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
