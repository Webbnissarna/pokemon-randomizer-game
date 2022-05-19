import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../.jest/render";
import Ball from ".";

describe("Ball", () => {
  it("renders", () => {
    const func = () => render(<Ball size="sm" />);

    expect(func).not.toThrow();
  });

  it("calls onClick", () => {
    const callback = jest.fn();

    render(<Ball size="sm" onClick={callback} />);

    fireEvent.click(screen.getByRole("button"));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const callback = jest.fn();

    render(<Ball size="lg" onClick={callback} disabled={true} />);

    fireEvent.click(screen.getByRole("button"));

    expect(callback).not.toHaveBeenCalled();
  });
});
