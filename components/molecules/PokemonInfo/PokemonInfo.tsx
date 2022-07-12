import { Flex, Box } from "theme-ui";

import NamePropDisplay from "../../atoms/NamePropDisplay/NamePropDisplay";
import AbilityDisplay from "../../atoms/AbilityDisplay";
import ShowcaseImage from "../../atoms/ShowcaseImage";
import NatureDisplay from "../../atoms/NatureDisplay";
import TypesDisplay from "../../atoms/TypesDisplay";
import MoveDisplay from "../../atoms/MoveDisplay";

import { toImgBase64PNG } from "../../../utils/Misc";

import {
  containerStyle,
  halfBasisStyle,
  mainInfoContainerStyle,
  movesContainerStyle,
  upperContentStyle,
} from "./PokemonInfo.styles";

import type { PokemonInfoProps } from "./PokemonInfo.types";

export default function PokemonInfo({
  pokemon,
  gamePropGetter,
}: PokemonInfoProps): JSX.Element {
  const gameProp = gamePropGetter(pokemon);

  return (
    <Flex sx={containerStyle}>
      <Flex sx={upperContentStyle}>
        <Box sx={halfBasisStyle}>
          <ShowcaseImage
            imageSrc={toImgBase64PNG(pokemon.info.imageData)}
            alt={pokemon.info.name.en}
          />
        </Box>
        <Box sx={halfBasisStyle}>
          <Flex sx={mainInfoContainerStyle}>
            <NamePropDisplay name={pokemon.info.name.en} prop={gameProp} />
            <TypesDisplay types={pokemon.info.types} />
            <NatureDisplay nature={pokemon.nature} />
            <AbilityDisplay ability={pokemon.ability} />
          </Flex>
        </Box>
      </Flex>

      <Flex sx={movesContainerStyle}>
        {pokemon.moves.map((move) => (
          <MoveDisplay key={move.indexNo} move={move} />
        ))}
      </Flex>
    </Flex>
  );
}
