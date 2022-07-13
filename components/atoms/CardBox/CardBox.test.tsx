import { render } from "../../../.jest/render";
import { Text } from "theme-ui";
import CardBox from ".";

describe("CardBox", () => {
  it("renders", () => {
    const { asFragment } = render(
      <CardBox>
        <Text>Hello World</Text>
      </CardBox>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
