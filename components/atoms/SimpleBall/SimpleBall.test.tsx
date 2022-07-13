import { render } from "../../../.jest/render";
import SimpleBall from ".";

describe("SimpleBall", () => {
  it("renders", () => {
    const { asFragment } = render(<SimpleBall size={100} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
