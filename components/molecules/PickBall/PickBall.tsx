import { Box, Flex, Image, Text } from "theme-ui";
import { toImgBase64PNG } from "../../../utils/Misc";
import Ball from "../../atoms/Ball";
import Star from "../../atoms/Star";
import { PickBallProps } from "./PickBall.types";

export default function PickBall({
  pokemon,
  gamePropGetter,
  showPokemon,
  showStar,
  onClick,
}: PickBallProps): JSX.Element {
  const gameProp = gamePropGetter(pokemon);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        width: "fit-content",
        gap: "sm",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "calc(50% - 90px)",
            left: "calc(50% - 90px)",
          }}
        >
          <Star size={180} visible={showStar} />
        </Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              ...(showPokemon && { opacity: 0 }),
            }}
          >
            <Ball size="lg" onClick={onClick} />
          </Box>
          {showPokemon && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: "md",
                pointerEvents: "none",
              }}
            >
              <Image
                src={toImgBase64PNG(pokemon.info.imageData)}
                alt={pokemon.info.name.en}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Text
        sx={{
          fontSize: "lg",
          zIndex: 1,
        }}
      >
        {gameProp.mainProp}
      </Text>
      {gameProp.optionalProp && (
        <Text
          sx={{
            fontSize: "lg",
          }}
        >
          {gameProp.optionalProp}
        </Text>
      )}
    </Flex>
  );
}
