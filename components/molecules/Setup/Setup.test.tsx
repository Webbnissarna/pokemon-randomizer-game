import { render } from "@testing-library/react";
import Setup from ".";

describe("Setup", () => {
  it("renders", () => {
    const func = () => render(<Setup />);

    expect(func).not.toThrow();
  });
});
