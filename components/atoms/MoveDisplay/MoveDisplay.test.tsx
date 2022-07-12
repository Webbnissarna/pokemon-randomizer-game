import { render } from "../../../.jest/render";
import MoveDisplay from ".";
import { MOCK_MOVES } from "../../../utils/testHelper";

describe("MoveDisplay", () => {
  it("renders", () => {
    const func = () => render(<MoveDisplay move={MOCK_MOVES[0]} />);

    expect(func).not.toThrow();
  });
});
