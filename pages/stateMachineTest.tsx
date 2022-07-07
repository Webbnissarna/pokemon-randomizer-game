import React, { Fragment } from "react";
import { Box, Flex } from "theme-ui";
import Button from "../components/atoms/Button";
import { useRandomizerGame } from "../utils/StateManagement/useRandomizerGame";

export default function Index() {
  const {
    state,
    currentPlayer,
    currentLineup,
    preview,
    players,
    startGame,
    pick,
    choose,
    skip,
    error,
  } = useRandomizerGame();

  return (
    <Box>
      <Flex sx={{ gap: "md", margin: "md" }}>
        <Button
          text="startGame"
          onClick={startGame}
          variant={"neutral"}
          size="sm"
        />
        <Button
          text="pick0"
          onClick={() => pick(0)}
          variant={"neutral"}
          size="sm"
        />
        <Button
          text="pick1"
          onClick={() => pick(1)}
          variant={"neutral"}
          size="sm"
        />
        <Button
          text="pick2"
          onClick={() => pick(2)}
          variant={"neutral"}
          size="sm"
        />
        <Button text="choose" onClick={choose} variant={"neutral"} size="sm" />
        <Button text="skip" onClick={skip} variant={"neutral"} size="sm" />
      </Flex>
      <pre>
        {`state: ${state}`}
        <br />
        {`currentPlayer: ${currentPlayer}`}
        <br />
        {`currentLineup: ${currentLineup
          .map((p) => p.info.name.en)
          .join(", ")}`}
        <br />
        {`previewed: ${preview?.info.name.en}`}
        <br />
        {players.map((player, index) => (
          <Fragment key={player.name}>
            <br />
            {`player ${index}: ${player.name}`}
            <br />
            {`skips: ${player.skips}`}
            <br />
            {`pokemon: ${player.pokemon.map((p) => p.info.name.en).join(", ")}`}
            <br />
          </Fragment>
        ))}
        <br />
        <br />
        error: {error?.name} {error?.message}
      </pre>
    </Box>
  );
}
