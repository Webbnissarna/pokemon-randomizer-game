import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../.jest/render";
import Button from ".";

describe("Button", () => {
  it("renders", () => {
    const func = () =>
      render(
        <Button
          variant="positive"
          size="sm"
          text="Hello World"
          onClick={() => undefined}
        />
      );

    expect(func).not.toThrow();
  });

  it("shows text", () => {
    const text = "Hello World";

    render(
      <Button
        variant="positive"
        size="sm"
        text={text}
        onClick={() => undefined}
      />
    );

    const element = screen.getByText(text);

    expect(element).toBeTruthy();
  });

  it("calls onClick", () => {
    const text = "Hello World";
    const callback = jest.fn();

    render(
      <Button variant="positive" size="sm" text={text} onClick={callback} />
    );

    fireEvent.click(screen.getByText(text));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const text = "Hello World";
    const callback = jest.fn();

    render(
      <Button
        variant="positive"
        size="sm"
        text={text}
        onClick={callback}
        disabled={true}
      />
    );

    fireEvent.click(screen.getByText(text));

    expect(callback).not.toHaveBeenCalled();
  });
});
