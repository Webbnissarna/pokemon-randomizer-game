import { Box, Flex, Heading } from "theme-ui";
import CardBox from "../../atoms/CardBox";
import SimpleBall from "../../atoms/SimpleBall";
import {
  rootStyle,
  ballContainerStyle,
  titleContainerStyle,
  titleStyle,
} from "./TitleWithBall.styles";
import { TitleWithBallProps } from "./TitleWithBall.types";

export default function TitleWithBall({
  text,
}: TitleWithBallProps): JSX.Element {
  return (
    <Flex sx={rootStyle}>
      <Box sx={ballContainerStyle}>
        <SimpleBall size={"100%"} />
      </Box>
      <Box sx={titleContainerStyle}>
        <CardBox>
          <Heading as="h1" sx={titleStyle}>
            {text}
          </Heading>
        </CardBox>
      </Box>
    </Flex>
  );
}
