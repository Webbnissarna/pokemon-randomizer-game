import { Flex } from "theme-ui";
import TypesDisplay from ".";
import type { Type } from "../../../utils/Generator/pokemon.types";

interface ControlProps {
  types: Type[];
}

export function Default({ types }: ControlProps) {
  return (
    <Flex sx={{ width: "min(200px, 100%)" }}>
      <TypesDisplay types={types} />
    </Flex>
  );
}

Default.args = {
  types: ["Electric", "Flying"],
} as ControlProps;
