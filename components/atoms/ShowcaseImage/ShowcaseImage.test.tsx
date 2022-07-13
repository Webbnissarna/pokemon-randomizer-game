import { render } from "../../../.jest/render";
import ShowcaseImage from ".";
import { MOCK_IMAGEDATA } from "../../../utils/testHelper";
import { screen } from "@testing-library/react";
import { toImgBase64PNG } from "../../../utils/Misc";

describe("ShowcaseImage", () => {
  it("renders", () => {
    const { asFragment } = render(
      <ShowcaseImage imageSrc={toImgBase64PNG(MOCK_IMAGEDATA)} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("uses alt text", () => {
    const altText = "Hello World";
    render(
      <ShowcaseImage imageSrc={toImgBase64PNG(MOCK_IMAGEDATA)} alt={altText} />
    );

    const imageElement = screen.queryByAltText(altText);

    expect(imageElement).not.toBeNull();
  });
});
