import { render } from "../../../.jest/render";
import AbilityDisplay from ".";
import { MOCK_ABILITY } from "../../../utils/testHelper";

describe("AbilityDisplay", () => {
  it("renders", () => {
    const func = () => render(<AbilityDisplay ability={MOCK_ABILITY} />);

    expect(func).not.toThrow();
  });
});
