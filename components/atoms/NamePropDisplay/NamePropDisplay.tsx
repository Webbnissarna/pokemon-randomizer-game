import { Flex, Heading, Text } from "theme-ui";
import { containerStyle } from "./NamePropDisplay.styles";

import type { NamePropDisplayProps } from "./NamePropDisplay.types";

export default function NamePropDisplay({
  name,
  prop,
}: NamePropDisplayProps): JSX.Element {
  return (
    <Flex sx={containerStyle}>
      <Heading as="h1">{name}</Heading>
      <Heading as="h2">{prop.mainProp}</Heading>
      {prop.optionalProp && <Text>{prop.optionalProp}</Text>}
    </Flex>
  );
}
