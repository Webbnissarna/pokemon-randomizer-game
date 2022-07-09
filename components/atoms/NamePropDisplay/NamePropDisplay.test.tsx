import { render } from "../../../.jest/render";
import NamePropDisplay from ".";

describe("NamePropDisplay", () => {
  it("renders", () => {
    const func = () => render(<NamePropDisplay prop={{ mainProp: "A" }} />);

    expect(func).not.toThrow();
  });
});
