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
      <h1>Small</h1>
      <Button onClick={onClick} size="sm" variant="positive" text="Positive" />
      <Button onClick={onClick} size="sm" variant="negative" text="Negative" />
      <Button onClick={onClick} size="sm" variant="neutral" text="Neutral" />
      <Button
        onClick={onClick}
        size="sm"
        variant="secondary"
        text="Secondary"
      />
      <Button onClick={onClick} size="sm" variant="tertiary" text="Tertiary" />

      <Button
        onClick={onClick}
        size="sm"
        variant="positive"
        text="Positive (disabled)"
        disabled={true}
      />
      <Button
        onClick={onClick}
        size="sm"
        variant="negative"
        text="Negative (disabled)"
        disabled={true}
      />
      <Button
        onClick={onClick}
        size="sm"
        variant="neutral"
        text="Neutral (disabled)"
        disabled={true}
      />
      <Button
        onClick={onClick}
        size="sm"
        variant="secondary"
        text="Secondary (disabled)"
        disabled={true}
      />
      <Button
        onClick={onClick}
        size="sm"
        variant="tertiary"
        text="Tertiary (disabled)"
        disabled={true}
      />

      <h1>Medium</h1>
      <Button onClick={onClick} size="md" variant="positive" text="Positive" />
      <Button onClick={onClick} size="md" variant="negative" text="Negative" />
      <Button onClick={onClick} size="md" variant="neutral" text="Neutral" />
      <Button
        onClick={onClick}
        size="md"
        variant="secondary"
        text="Secondary"
      />
      <Button onClick={onClick} size="md" variant="tertiary" text="Tertiary" />

      <Button
        onClick={onClick}
        size="md"
        variant="positive"
        text="Positive (disabled)"
        disabled={true}
      />
      <Button
        onClick={onClick}
        size="md"
        variant="negative"
        text="Negative (disabled)"
        disabled={true}
      />
      <Button
        onClick={onClick}
        size="md"
        variant="neutral"
        text="Neutral (disabled)"
        disabled={true}
      />
      <Button
        onClick={onClick}
        size="md"
        variant="secondary"
        text="Secondary (disabled)"
        disabled={true}
      />
      <Button
        onClick={onClick}
        size="md"
        variant="tertiary"
        text="Tertiary (disabled)"
        disabled={true}
      />
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
    options: ["sm", "md"],
    control: { type: "select" },
  },
  variant: {
    options: ["positive", "negative", "neutral", "secondary", "tertiary"],
    control: { type: "radio" },
    defaultValue: "positive",
  },
};
