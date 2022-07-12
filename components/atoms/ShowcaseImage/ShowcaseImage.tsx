import { Box, Image } from "theme-ui";
import { imageContainerStyle, imageInnerStyle } from "./ShowcaseImage.styles";
import type { ShowcaseImageProps } from "./ShowcaseImage.types";

export default function ShowcaseImage({
  imageSrc,
  alt,
}: ShowcaseImageProps): JSX.Element {
  return (
    <Box sx={imageContainerStyle}>
      <Box sx={imageInnerStyle}>
        <Image src={imageSrc} alt={alt} />
      </Box>
    </Box>
  );
}
