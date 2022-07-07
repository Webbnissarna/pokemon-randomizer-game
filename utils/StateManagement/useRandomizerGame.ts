import { useMachine } from "@xstate/react";
import { GeneratedPokemon } from "../Generator/generator.types";
import { Player, stateMachine } from "./stateManager";
import { Typegen0 } from "./stateManager.typegen";

type ValidStates = Typegen0["matchesStates"];

export interface RandomizerGame {
  state: ValidStates;
  currentPlayer: number;
  currentLineup: GeneratedPokemon[];
  preview?: GeneratedPokemon;
  players: Player[];

  startGame(): void;
  pick(index: 0 | 1 | 2): void;
  choose(): void;
  skip(): void;

  error?: Error;
}

export function useRandomizerGame(): RandomizerGame {
  const [current, send] = useMachine(stateMachine);

  return {
    state: current.value as unknown as ValidStates,
    currentPlayer: current.context.currentPlayerIndex,
    currentLineup: current.context.generated.slice(
      current.context.selectionStartIndex,
      current.context.selectionStartIndex + 3
    ),
    preview:
      current.context.generated[
        current.context.selectionStartIndex + current.context.previewOffset
      ],
    players: current.context.players,

    startGame: () => send("START_GAME"),
    pick: (index) => send("PICK", { index }),
    choose: () => send("CHOOSE"),
    skip: () => send("SKIP"),

    error: current.context.error,
  };
}
