import React, { useState } from "react";
import { Flex } from "theme-ui";
import TabRadioInput from "./TabRadioInput";
import { OnChangeEvent } from "./TabRadioInput.types";

export function Default() {
  const values = ["Solo", "2-player"];
  const [selected, setSelected] = useState(values[0]);

  const onChange = (e: OnChangeEvent) => {
    setSelected(e.target.value);
  };
  return (
    <Flex sx={{ flexDirection: "column", gap: 20 }}>
      <TabRadioInput onChange={onChange} values={values} selected={selected} />
      <span>Selected: {selected}</span>
    </Flex>
  );
}
