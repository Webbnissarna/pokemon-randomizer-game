import { Box } from "theme-ui";
import AbilityDisplay from ".";
import { MOCK_ABILITY } from "../../../utils/testHelper";

export function Default() {
  return (
    <Box sx={{ width: "min(200px, 100%)" }}>
      <AbilityDisplay ability={MOCK_ABILITY} />
    </Box>
  );
}
