import { screen } from "@testing-library/react";
import { render } from "../../../.jest/render";
import userEvent from "@testing-library/user-event";
import TabRadioInput from ".";

describe("Tab Radio Input", () => {
  it("renders", () => {
    const func = () =>
      render(
        <TabRadioInput
          values={["test"]}
          selected="test"
          onChange={() => undefined}
        />
      );

    expect(func).not.toThrow();
  });

  it("shows values", () => {
    const values = ["Solo", "2-player", "vs bot"];

    render(
      <TabRadioInput
        values={values}
        selected={values[0]}
        onChange={() => undefined}
      />
    );

    values.map((value) => screen.getByLabelText(value));

    expect(true).toBeTruthy();
  });

  it("marks selected", () => {
    const values = ["Solo", "2-player", "vs bot"];
    const selected = values[0];

    render(
      <TabRadioInput
        values={values}
        selected={selected}
        onChange={() => undefined}
      />
    );
    const element = screen.getByLabelText<HTMLInputElement>(selected);

    expect(element.checked).toBeTruthy();
  });

  it("calls onChange", async () => {
    const values = ["Solo", "2-player", "vs bot"];
    const valueToClick = values[1];
    const callback = jest.fn();
    const user = userEvent.setup();

    render(
      <TabRadioInput values={values} selected={values[0]} onChange={callback} />
    );
    const element = screen.getByLabelText<HTMLInputElement>(valueToClick);
    await user.click(element);

    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: valueToClick,
        }),
      })
    );
  });
});
