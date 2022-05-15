import React, { useId } from "react";
import { Box, Flex, Label } from "theme-ui";

interface TabRadioInputProps {
  values: string[];
  selected: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TabRadioInput({
  values,
  selected,
  onChange,
}: TabRadioInputProps): JSX.Element {
  const id = useId();

  return (
    <Flex
      sx={{
        "& > div:first-of-type label": {
          borderTopLeftRadius: "md",
          borderBottomLeftRadius: "md",
        },
        "& > div:last-of-type label": {
          borderTopRightRadius: "md",
          borderBottomRightRadius: "md",
        },
      }}
    >
      {values.map((value) => (
        <Box
          key={value}
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "& input": {
              display: "none",
            },

            "& input:checked ~ label": {
              color: "secondaryText",
              backgroundColor: "secondary",
              filter: "brightness(0.6)",
              opacity: 0.8,
              cursor: "unset",
            },

            "& input:not(:checked) ~ label": {
              "&:hover": {
                filter: "brightness(1.15)",
              },
              "&:active": {
                filter: "brightness(0.95)",
              },
            },
          }}
        >
          <input
            name={id}
            type="radio"
            id={`${id}-${value}`}
            checked={value === selected}
            value={value}
            onChange={onChange}
          />
          <Label
            htmlFor={`${id}-${value}`}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "neutralText",
              backgroundColor: "neutral",
              height: 30,
              fontFamily: "inherit",
              fontSize: "md",
              boxShadow: "md",
              cursor: "pointer",

              transition:
                "filter 0.1s ease-out, background 0.1s ease-out, color 0.1s ease-out",
            }}
          >
            {value}
          </Label>
        </Box>
      ))}
    </Flex>
  );
}
