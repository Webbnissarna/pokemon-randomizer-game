import { Box, Flex } from "theme-ui";
import NatureDisplay from ".";
import type { Stat } from "../../../utils/Generator/pokemon.types";

interface ControlProps {
  name: string;
  increasedStat: Stat;
  decreasedStat: Stat;
}

export function Default({ name, increasedStat, decreasedStat }: ControlProps) {
  return (
    <Flex sx={{ flexDirection: "column", gap: "lg" }}>
      <h1>Custom</h1>
      <Box sx={{ width: "min(200px, 100%)" }}>
        <NatureDisplay
          nature={{
            indexNo: 0,
            name: { en: name },
            increasedStat,
            decreasedStat,
          }}
        />
      </Box>

      <h1>Nature without stats</h1>
      <Box sx={{ width: "min(200px, 100%)" }}>
        <NatureDisplay
          nature={{
            indexNo: 0,
            name: { en: "Hardy" },
            increasedStat: null,
            decreasedStat: null,
          }}
        />
      </Box>
    </Flex>
  );
}

Default.args = {
  name: "Bold",
} as ControlProps;

const statOptions = ["Attack", "Defense", "Speed", "Sp. Attack", "Sp. Defense"];

Default.argTypes = {
  increasedStat: {
    options: statOptions,
    control: { type: "select" },
  },
  decreasedStat: {
    options: statOptions,
    control: { type: "select" },
  },
};
