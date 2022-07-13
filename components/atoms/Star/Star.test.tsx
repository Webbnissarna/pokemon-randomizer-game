import { render } from "../../../.jest/render";
import Star from ".";

describe("Star", () => {
  it("renders", () => {
    const { asFragment } = render(<Star size={100} visible={true} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
