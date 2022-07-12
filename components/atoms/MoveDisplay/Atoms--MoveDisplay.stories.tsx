import { Flex } from "theme-ui";
import MoveDisplay from ".";
import { MOCK_MOVES } from "../../../utils/testHelper";

export function Default() {
  return (
    <Flex sx={{ flexDirection: "column", gap: "lg" }}>
      {MOCK_MOVES.map((move) => (
        <MoveDisplay key={move.indexNo} move={move} />
      ))}
    </Flex>
  );
}
