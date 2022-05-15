import { render } from "../../../.jest/render";
import { Text } from "theme-ui";
import CardBox from ".";

describe("CardBox", () => {
  it("renders", () => {
    const func = () =>
      render(
        <CardBox>
          <Text>Hello World</Text>
        </CardBox>
      );

    expect(func).not.toThrow();
  });
});
