import { render } from "../../../.jest/render";
import BackgroundWrapper from ".";
import { screen } from "@testing-library/react";

describe("Background", () => {
  it("renders", () => {
    const { asFragment } = render(<BackgroundWrapper />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders children", () => {
    const childId = "test-child";
    const childContent = "Hello World";

    render(
      <BackgroundWrapper>
        <span data-testid={childId}>{childContent}</span>
      </BackgroundWrapper>
    );

    const childElement = screen.getByTestId(childId);

    expect(childElement.textContent).toBe(childContent);
  });
});
