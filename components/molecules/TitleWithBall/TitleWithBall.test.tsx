import { render } from "../../../.jest/render";
import TitleWithBall from ".";

describe("TitleWithBall", () => {
  it("renders", () => {
    const { asFragment } = render(<TitleWithBall text="" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
