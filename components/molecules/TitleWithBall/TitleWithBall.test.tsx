import { render } from "../../../.jest/render";
import TitleWithBall from ".";

describe("TitleWithBall", () => {
  it("renders", () => {
    const func = () => render(<TitleWithBall text="" />);

    expect(func).not.toThrow();
  });
});
