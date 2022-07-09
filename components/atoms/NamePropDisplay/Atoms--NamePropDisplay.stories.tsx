import NamePropDisplay from ".";

interface ControlProps {
  name: string;
  mainProp: string;
  optionalProp: string;
}

export function Default({ name, mainProp, optionalProp }: ControlProps) {
  return <NamePropDisplay name={name} prop={{ mainProp, optionalProp }} />;
}

Default.args = {
  name: "Pikachu",
  mainProp: "ピカチュウ",
  optionalProp: "Pikachū",
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
