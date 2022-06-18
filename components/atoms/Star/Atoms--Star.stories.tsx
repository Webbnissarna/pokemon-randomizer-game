import { Flex } from "theme-ui";
import Star from ".";

interface ControlProps {
  size: string;
  visible: boolean;
}

export function Default({ size, visible }: ControlProps) {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <h1>Custom</h1>
      <Star size={size} visible={visible} />
    </Flex>
  );
}

Default.args = {
  size: "150px",
  visible: true,
} as ControlProps;
