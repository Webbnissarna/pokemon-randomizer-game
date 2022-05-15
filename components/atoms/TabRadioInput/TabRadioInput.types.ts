export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface TabRadioInputProps {
  values: string[];
  selected: string;
  onChange: (event: OnChangeEvent) => void;
}
