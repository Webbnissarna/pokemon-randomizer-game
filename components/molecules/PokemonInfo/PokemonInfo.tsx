import { Image, Text } from "theme-ui";
import { Flex, Box } from "theme-ui";
import type { ThemeUIStyleObject } from "theme-ui";

import NamePropDisplay from "../../atoms/NamePropDisplay/NamePropDisplay";
import NatureDisplay from "../../atoms/NatureDisplay";
import TypesDisplay from "../../atoms/TypesDisplay";

import { toImgBase64PNG } from "../../../utils/Misc";
import {
  getLatestUsefulMoveDescription,
  TypeColors,
} from "../../../utils/pokemonMeta";

import type { GamePropGetter } from "../../../utils/GamePropSystem/GamePropSystem.types";
import type { GeneratedPokemon } from "../../../utils/Generator/generator.types";
import type { Ability, MoveInfo } from "../../../utils/Generator/pokemon.types";

interface PokemonInfoProps {
  pokemon: GeneratedPokemon;
  gamePropGetter: GamePropGetter<GeneratedPokemon>;
}

export const containerStyle: ThemeUIStyleObject = {
  width: "min(380px, 90vw)",
  flexDirection: "column",
  backgroundColor: "contentBackground",
  borderRadius: "md",
  boxShadow: "md",
  justifyContent: "center",
  gap: "md",
  paddingY: "md",
};

export const imageContainerStyle: ThemeUIStyleObject = {
  width: 200,
  height: 200,
  padding: "sm",
  backgroundColor: "inputBackground",
  borderRadius: "md",
};

function AbilityDisplay({ ability }: { ability: Ability }): JSX.Element {
  return (
    <Flex sx={{ flexDirection: "column", gap: "sm" }}>
      <Text
        sx={{
          fontSize: "sm",
        }}
      >
        {ability.name.en}
      </Text>
      <Box
        sx={{
          backgroundColor: "inputBackground",
          borderRadius: "sm",
          padding: "sm",
        }}
      >
        <Text
          sx={{
            fontSize: "sm",
          }}
        >
          {ability.description}
        </Text>
      </Box>
    </Flex>
  );
}

function MoveDisplay({ move }: { move: MoveInfo }): JSX.Element {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: TypeColors[move.type],
        padding: "sm",
      }}
    >
      <Flex sx={{ gap: "sm" }}>
        <Box>
          <Text>{move.type}</Text>
        </Box>
        <Text>{move.category}</Text>
        <Text sx={{ flexGrow: 1 }}>{move.name.en}</Text>
        <Text>{move.power}</Text>
        <Text>{move.pp} PP</Text>
        <Text>{move.accuracy}%</Text>
      </Flex>
      <Text
        sx={{
          textAlign: "left",
        }}
      >
        {getLatestUsefulMoveDescription(move.description).desc}
      </Text>
    </Flex>
  );
}

function ShowcaseImage({
  imageSrc,
  alt,
}: {
  imageSrc: string;
  alt?: string;
}): JSX.Element {
  return (
    <Box sx={imageContainerStyle}>
      <Image src={imageSrc} alt={alt} />
    </Box>
  );
}

export default function PokemonInfo({
  pokemon,
  gamePropGetter,
}: PokemonInfoProps): JSX.Element {
  const gameProp = gamePropGetter(pokemon);

  return (
    <Flex sx={containerStyle}>
      <Flex sx={{ paddingX: "md", gap: "sm" }}>
        <ShowcaseImage
          imageSrc={toImgBase64PNG(pokemon.info.imageData)}
          alt={pokemon.info.name.en}
        />
        <Flex
          sx={{
            flexDirection: "column",
            flexGrow: 1,
            gap: "sm",
          }}
        >
          <NamePropDisplay name={pokemon.info.name.en} prop={gameProp} />
          <TypesDisplay types={pokemon.info.types} />
          <NatureDisplay nature={pokemon.nature} />
          <AbilityDisplay ability={pokemon.ability} />
        </Flex>
      </Flex>

      <Flex sx={{ flexDirection: "column", gap: "sm", fontSize: "sm" }}>
        {pokemon.moves.map((move) => (
          <MoveDisplay key={move.indexNo} move={move} />
        ))}
      </Flex>
    </Flex>
  );
}
