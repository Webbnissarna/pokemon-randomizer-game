import { render } from "../../../.jest/render";
import NatureDisplay from ".";
import { MOCK_NATURE } from "../../../utils/testHelper";

describe("NatureDisplay", () => {
  it("renders", () => {
    const func = () => render(<NatureDisplay nature={MOCK_NATURE} />);

    expect(func).not.toThrow();
  });
});
