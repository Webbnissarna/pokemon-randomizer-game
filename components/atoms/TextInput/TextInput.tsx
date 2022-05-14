import { Input } from "theme-ui";

export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface TextInputProps {
  value: string;
  onChange: (event: OnChangeEvent) => void;
  placeholder: string;
  disabled?: boolean;
}

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
        sx={{
          borderRadius: "sm",
          border: "0px",
          backgroundColor: "inputBackground",
          color: "inputText",
          fontSize: "md",
          fontFamily: "inherit",

          "&:focus-visible, &:focus": {
            outline: "1px solid #999",
          },
        }}
      />
    </>
  );
}
