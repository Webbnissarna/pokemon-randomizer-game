export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface TextInputProps {
  value: string;
  onChange: (event: OnChangeEvent) => void;
  placeholder: string;
  disabled?: boolean;
}
