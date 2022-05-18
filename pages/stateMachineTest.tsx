import { useMachine } from "@xstate/react";
import React from "react";
import { Box, Flex, Text } from "theme-ui";
import type { Event, SingleOrArray } from "xstate";
import Button from "../components/atoms/Button";
import {
  addGeneratedEvent,
  chooseEvent,
  pickEvent,
  skipEvent,
  startGameEvent,
  stateMachine,
} from "../utils/StateManagement/stateManager";

export default function Index() {
  const [current, send] = useMachine(stateMachine);

  const testButtons = [
    { name: "START_GAME", event: "START_GAME" },
    { name: "PICK 0", event: "PICK", payload: { index: 0 } },
    { name: "PICK 1", event: "PICK", payload: { index: 1 } },
    { name: "PICK 2", event: "PICK", payload: { index: 2 } },
    { name: "CHOOSE", event: "CHOOSE" },
    { name: "SKIP", event: "SKIP" },
  ];

  return (
    <Box>
      <Flex sx={{ gap: "md", margin: "md" }}>
        {testButtons.map(({ name, event, payload }) => (
          <Button
            key={name}
            text={name}
            size="sm"
            variant="neutral"
            onClick={() => {
              send(
                event as SingleOrArray<
                  Event<
                    | startGameEvent
                    | addGeneratedEvent
                    | pickEvent
                    | chooseEvent
                    | skipEvent
                  >
                >,
                payload
              );
            }}
          />
        ))}
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <pre>
          error: {current.context.error?.name} {current.context.error?.message}
        </pre>

        <Text>Pokemon</Text>
        <pre>
          {`state: ${current.value}`}
          <br />
          {`generated: ${current.context.generated.length}`}
          <br />
          {`selectionStartIndex: ${current.context.selectionStartIndex}`}
          <br />
          {`currentPlayerIndex: ${current.context.currentPlayerIndex}`}
          <br />
          {`previewIndex: ${current.context.previewIndex}`}
          <br />
          {current.context.players.map((player, i) => (
            <React.Fragment key={i}>
              player {i}:{" "}
              {player.pokemon.map((pokemon) => pokemon.info.name.en).join(", ")}
              <br />
            </React.Fragment>
          ))}
        </pre>
      </Flex>
    </Box>
  );
}
