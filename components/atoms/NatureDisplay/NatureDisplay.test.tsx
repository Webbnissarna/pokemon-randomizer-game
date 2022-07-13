import { render } from "../../../.jest/render";
import NatureDisplay from ".";
import { MOCK_NATURE } from "../../../utils/testHelper";

describe("NatureDisplay", () => {
  it("renders", () => {
    const { asFragment } = render(<NatureDisplay nature={MOCK_NATURE} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
