import seedrandom from "seedrandom";
import { assign, createMachine } from "xstate";
import { DataManager } from "../DataManager/dataManager";
import { generatePokemon } from "../Generator/concreteGenerator";
import type { GeneratedPokemon } from "../Generator/generator.types";
import type { RNG } from "../Generator/pokemon.types";

export interface Player {
  name: string;
  pokemon: GeneratedPokemon[];
  skips: number;
}

export interface startGameEvent {
  type: "START_GAME";
}

export interface addGeneratedEvent {
  type: "ADD_GENERATED";
  pokemon: GeneratedPokemon;
}

export interface pickEvent {
  type: "PICK";
  index: number;
}

export interface chooseEvent {
  type: "CHOOSE";
}

export interface skipEvent {
  type: "SKIP";
}

type Event =
  | startGameEvent
  | addGeneratedEvent
  | pickEvent
  | chooseEvent
  | skipEvent;

export interface GameStateContext {
  random: RNG;
  generated: GeneratedPokemon[];
  selectionStartIndex: number;
  currentPlayerIndex: number;
  previewOffset: number;
  players: Player[];
  error?: Error;
}

function modifyPlayer(
  context: GameStateContext,
  index: number,
  callback: (player: Player) => Partial<Player>
): Player[] {
  const arr = context.players.slice();
  const prev = context.players[index];
  const player = { ...prev, ...callback(prev) };
  arr.splice(index, 1, player);
  return arr;
}

const dataManager = new DataManager("/data/");

export const stateMachine = createMachine(
  {
    id: "Pokemon Game",
    schema: {
      context: {} as GameStateContext,
      events: {} as Event,
    },
    tsTypes: {} as import("./stateManager.typegen").Typegen0,
    initial: "setup",
    context: {
      random: seedrandom(),
      generated: [],
      selectionStartIndex: 0,
      currentPlayerIndex: 0,
      previewOffset: 0,
      players: [
        {
          name: "",
          skips: 0,
          pokemon: [],
        },
        {
          name: "",
          skips: 0,
          pokemon: [],
        },
      ],
    },
    states: {
      setup: {
        on: {
          START_GAME: {
            target: "generate",
          },
        },
      },
      generate: {
        invoke: {
          src: "generateAllPokemon",
          id: "generateAllPokemon",
          onDone: [
            {
              target: "pick",
            },
          ],
          onError: {
            target: "setup",
            actions: ["setError", "onGenerateError"],
          },
        },
        on: {
          ADD_GENERATED: {
            actions: "addGenerated",
            target: "generate",
            internal: true,
          },
        },
      },
      generateError: {},
      pick: {
        always: {
          cond: "currentPlayerPartyFull",
          target: "decide",
        },
        on: {
          PICK: {
            actions: "setPreview",
            target: "preview",
          },
        },
      },
      preview: {
        on: {
          CHOOSE: {
            actions: "addPokemon",
            target: "decide",
          },
          SKIP: {
            actions: "addSkip",
            cond: "skipsLeft",
            target: "decide",
          },
        },
      },
      decide: {
        exit: "moveSelection",
        always: [
          {
            cond: "allPlayerPartiesFull",
            target: "results",
          },
          {
            target: "pick",
            actions: "nextPlayer",
          },
        ],
      },
      results: {
        type: "final",
      },
    },
  },
  {
    actions: {
      addGenerated: assign({
        generated: (context, event) => [...context.generated, event.pokemon],
      }),

      addPokemon: assign({
        players: (context) =>
          modifyPlayer(context, context.currentPlayerIndex, (p) => ({
            pokemon: [
              ...p.pokemon,
              context.generated[
                context.selectionStartIndex + context.previewOffset
              ],
            ],
          })),
      }),

      addSkip: assign({
        players: (context) =>
          modifyPlayer(context, context.currentPlayerIndex, (p) => ({
            skips: p.skips + 1,
          })),
      }),

      moveSelection: assign({
        selectionStartIndex: (context) => context.selectionStartIndex + 3,
      }),

      nextPlayer: assign({
        currentPlayerIndex: (ctx) =>
          (ctx.currentPlayerIndex + 1) % ctx.players.length,
      }),

      setPreview: assign({
        previewOffset: (_context, event) => event.index,
      }),

      setError: assign({
        error: (_context, event) => event.data as Error,
      }),

      onGenerateError: (_, event) => {
        console.error(event);
      },
    },

    services: {
      generateAllPokemon: (context) => (callback) =>
        generatePokemon(
          context.random,
          dataManager,
          (6 + 3) * 2 * 3,
          (pokemon) => callback({ type: "ADD_GENERATED", pokemon })
        ),
    },

    guards: {
      allPlayerPartiesFull: (context) =>
        context.players.every((p) => p.pokemon.length === 6),

      currentPlayerPartyFull: (context) =>
        context.players[context.currentPlayerIndex].pokemon.length === 6,

      skipsLeft: (context) =>
        context.players[context.currentPlayerIndex].skips < 3,
    },
  }
);
