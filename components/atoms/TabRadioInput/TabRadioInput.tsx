import React, { useId } from "react";
import { Box, Flex, Label } from "theme-ui";
import {
  containerStyle,
  labelStyle,
  valueRootStyle,
} from "./TabRadioInput.styles";
import type { TabRadioInputProps } from "./TabRadioInput.types";

export default function TabRadioInput({
  values,
  selected,
  onChange,
}: TabRadioInputProps): JSX.Element {
  const id = useId();

  return (
    <Flex sx={containerStyle}>
      {values.map((value) => (
        <Box key={value} sx={valueRootStyle}>
          <input
            name={id}
            type="radio"
            id={`${id}-${value}`}
            checked={value === selected}
            value={value}
            onChange={onChange}
          />
          <Label htmlFor={`${id}-${value}`} sx={labelStyle}>
            {value}
          </Label>
        </Box>
      ))}
    </Flex>
  );
}
