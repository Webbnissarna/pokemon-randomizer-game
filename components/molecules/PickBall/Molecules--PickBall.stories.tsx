import { Flex } from "theme-ui";
import PickBall from ".";
import { makeLangGetter } from "../../../utils/GamePropSystem/LangGamePropSystem";
import { mockPokemon } from "../../../utils/testHelper";

interface ControlProps {
  showPokemon: boolean;
  showStar: boolean;
}

export function Default({ showPokemon, showStar }: ControlProps) {
  return (
    <Flex>
      <PickBall
        pokemon={mockPokemon}
        gamePropGetter={makeLangGetter("ja")}
        showPokemon={showPokemon}
        showStar={showStar}
        onClick={() => console.log("Click!")}
      />
    </Flex>
  );
}

Default.args = {
  showPokemon: false,
  showStar: false,
} as ControlProps;
