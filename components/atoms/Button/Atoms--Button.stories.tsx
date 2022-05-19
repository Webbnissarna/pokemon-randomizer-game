import React from "react";
import Button from ".";
import type { ClickEvent, Size, Variant } from "./Button.types";

interface ControlProps {
  size: Size;
  variant: Variant;
  text: string;
  disabled: boolean;
}

export function Default({ size, variant, text, disabled }: ControlProps) {
  const onClick = (event: ClickEvent) => {
    console.log("click", event);
  };

  const sizes: [string, Size][] = [
    ["Small", "sm"],
    ["Medium", "md"],
    ["Large", "lg"],
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h1>Custom</h1>
      <Button
        onClick={onClick}
        size={size}
        variant={variant}
        text={text}
        disabled={disabled}
      />

      {sizes.map(([title, buttonSize]) => (
        <React.Fragment key={title}>
          <h1>{title}</h1>
          <Button
            onClick={onClick}
            size={buttonSize}
            variant="positive"
            text="Positive"
          />
          <Button
            onClick={onClick}
            size={buttonSize}
            variant="negative"
            text="Negative"
          />
          <Button
            onClick={onClick}
            size={buttonSize}
            variant="neutral"
            text="Neutral"
          />
          <Button
            onClick={onClick}
            size={buttonSize}
            variant="secondary"
            text="Secondary"
          />
          <Button
            onClick={onClick}
            size={buttonSize}
            variant="tertiary"
            text="Tertiary"
          />

          <Button
            onClick={onClick}
            size={buttonSize}
            variant="positive"
            text="Positive (disabled)"
            disabled={true}
          />
          <Button
            onClick={onClick}
            size={buttonSize}
            variant="negative"
            text="Negative (disabled)"
            disabled={true}
          />
          <Button
            onClick={onClick}
            size={buttonSize}
            variant="neutral"
            text="Neutral (disabled)"
            disabled={true}
          />
          <Button
            onClick={onClick}
            size={buttonSize}
            variant="secondary"
            text="Secondary (disabled)"
            disabled={true}
          />
          <Button
            onClick={onClick}
            size={buttonSize}
            variant="tertiary"
            text="Tertiary (disabled)"
            disabled={true}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

Default.args = {
  size: "sm",
  variant: "positive",
  text: "Hello World",
  disabled: false,
} as ControlProps;

Default.argTypes = {
  size: {
    options: ["sm", "md", "lg"],
    control: { type: "select" },
  },
  variant: {
    options: ["positive", "negative", "neutral", "secondary", "tertiary"],
    control: { type: "radio" },
    defaultValue: "positive",
  },
};
