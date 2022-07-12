import ShowcaseImage from ".";
import { toImgBase64PNG } from "../../../utils/Misc";
import { MOCK_IMAGEDATA } from "../../../utils/testHelper";

export function Default() {
  return (
    <ShowcaseImage
      imageSrc={toImgBase64PNG(MOCK_IMAGEDATA)}
      alt="Alt text here"
    />
  );
}
