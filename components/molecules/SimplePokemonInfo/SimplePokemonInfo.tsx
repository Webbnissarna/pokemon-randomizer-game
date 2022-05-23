import { Box, Flex, Heading, Image, Text } from "theme-ui";
import { toImgBase64PNG } from "../../../utils/Misc";
import {
  containerStyle,
  imageContainerStyle,
} from "./SimplePokemonInfo.styles";
import type { SimplePokemoninfoProps } from "./SimplePokemonInfo.types";

export default function SimplePokemoninfo({
  pokemon,
  gamePropGetter,
}: SimplePokemoninfoProps): JSX.Element {
  const gameProp = gamePropGetter(pokemon);

  return (
    <Flex sx={containerStyle}>
      <Box sx={imageContainerStyle}>
        <Image
          src={toImgBase64PNG(pokemon.info.imageData)}
          alt={pokemon.info.name.en}
        />
      </Box>
      <Heading as="h1">{pokemon.info.name.en}</Heading>
      <Heading as="h2">{gameProp.mainProp}</Heading>
      {gameProp.optionalProp && <Text>{gameProp.optionalProp}</Text>}
    </Flex>
  );
}
