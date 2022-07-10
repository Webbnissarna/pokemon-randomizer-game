import { Box, ThemeUIStyleObject } from "theme-ui";
import BackgroundWrapper from "../components/atoms/BackgroundWrapper";
import Start from "../components/templates/Start";

export const mainContainerStyle: ThemeUIStyleObject = {
  height: "100vh",
  maxHeight: "100%",
};

export default function Index() {
  return (
    <Box sx={mainContainerStyle}>
      <BackgroundWrapper>
        <Start
          title="Lorem ipsum dolor sit amet"
          sourceLink="https://github.com/Webbnissarna/pokemon-randomizer-game"
          sourceLinkTitle="GitHub"
          onPlay={(options) => console.log("onPlay!", options)}
        />
      </BackgroundWrapper>
    </Box>
  );
}
