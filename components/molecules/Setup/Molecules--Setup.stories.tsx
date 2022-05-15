import { useState } from "react";
import { Flex } from "theme-ui";
import Setup from "./";

export function Default() {
  const [setupOptions, setSetupOptions] = useState({});

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Setup onPlay={setSetupOptions} />
      <h4>Options:</h4>
      <pre>{JSON.stringify(setupOptions, null, 2)}</pre>
    </Flex>
  );
}
