import { Button as StyledButton } from "theme-ui";
import { variants, sizes, disabledStyle, commonStyle } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export default function Button({
  text,
  variant,
  size,
  onClick,
  disabled = false,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton
      sx={{
        ...commonStyle(disabled),
        ...variants[variant],
        ...sizes[size],
        ...(disabled && disabledStyle),
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}
