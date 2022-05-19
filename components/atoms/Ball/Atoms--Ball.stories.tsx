import React from "react";
import { Flex } from "theme-ui";
import Ball from ".";
import type { BallProps, ClickEvent, Size } from "./Ball.types";

export function Default({ size, disabled }: BallProps): JSX.Element {
  const sizes: [string, Size][] = [
    ["Small", "sm"],
    ["Large", "lg"],
  ];

  const onClick = (event: ClickEvent) => {
    console.log("click", event);
  };

  return (
    <Flex sx={{ flexDirection: "column", gap: 20 }}>
      <h1>Custom</h1>
      <Ball size={size} disabled={disabled} onClick={onClick} />

      {sizes.map(([title, ballSize]) => (
        <React.Fragment key={title}>
          <h1>{title}</h1>
          <Ball size={ballSize} onClick={onClick} />
          <Ball size={ballSize} onClick={onClick} disabled={true} />
        </React.Fragment>
      ))}
    </Flex>
  );
}

Default.args = {
  size: "sm",
  disabled: false,
} as BallProps;

Default.argTypes = {
  size: {
    options: ["sm", "lg"],
    control: { type: "select" },
  },
};
