import { Input } from "theme-ui";
import { mainStyle } from "./TextInput.styles";
import type { TextInputProps } from "./TextInput.types";

export default function TextInput({
  value,
  onChange,
  placeholder,
  disabled,
}: TextInputProps): JSX.Element {
  return (
    <>
      <Input
        aria-label={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        sx={mainStyle}
      />
    </>
  );
}
