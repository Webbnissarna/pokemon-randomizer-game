import { screen } from "@testing-library/react";
import { render } from "../../../.jest/render";
import userEvent from "@testing-library/user-event";
import TextInput from ".";

describe("Text Input", () => {
  it("renders", () => {
    const { asFragment } = render(
      <TextInput value="" placeholder="" onChange={() => undefined} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("has textbox role", () => {
    render(<TextInput value="" placeholder="" onChange={() => undefined} />);

    const element = screen.getByRole("textbox");

    expect(element).toBeTruthy();
  });

  it("shows text", () => {
    const text = "Hello World";

    render(
      <TextInput value={text} placeholder="" onChange={() => undefined} />
    );

    const element = screen.getByDisplayValue(text);

    expect(element).toBeTruthy();
  });

  it("shows placeholder", () => {
    const placeholderText = "Placeholder text";

    render(
      <TextInput
        value=""
        placeholder={placeholderText}
        onChange={() => undefined}
      />
    );

    const element = screen.getByPlaceholderText(placeholderText);

    expect(element).toBeTruthy();
  });

  it("calls onChange", async () => {
    const text = "Hello world";
    const callback = jest.fn();
    const user = userEvent.setup();

    render(<TextInput value="" placeholder="" onChange={callback} />);

    await user.type(screen.getByRole("textbox"), text);

    expect(callback).toHaveBeenCalledTimes(text.length);
  });
});
