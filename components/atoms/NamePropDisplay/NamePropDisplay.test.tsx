import { render } from "../../../.jest/render";
import NamePropDisplay from ".";

describe("NamePropDisplay", () => {
  it("renders", () => {
    const { asFragment } = render(<NamePropDisplay prop={{ mainProp: "A" }} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
