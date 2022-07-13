import { render } from "../../../.jest/render";
import MoveDisplay from ".";
import { MOCK_MOVES } from "../../../utils/testHelper";

describe("MoveDisplay", () => {
  it("renders", () => {
    const { asFragment } = render(<MoveDisplay move={MOCK_MOVES[0]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
