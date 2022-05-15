(**status**: wip)

# Pokémon Randomizer Game!

A web-based game based on something I can't remember.

- [Pokémon Randomizer Game!](#pokémon-randomizer-game)
  - [Gameplay](#gameplay)
  - [Run (dev)](#run-dev)
  - [Component Stories](#component-stories)
  - [Tech stuff](#tech-stuff)

## Gameplay

Two players each take turns picking a Pokémon from three randomized Pokémons, with the twist the picking player is only given the randomized Pokémons name in a foreign language, relayed to them by the other player.

After picking one of the three the Pokémons english name, randomized moves and ability are revealed, and the picking player is given the choice to either keep it, or skip it. Skips are limited and when exhausted the player must keep the Pokémon in their team regardless.

This goes on until both players have teams of 6 randomized Pokémon. From there they are given a serialized text snippet for their team that they can paste into [Pokémon Showdown](https://pokemonshowdown.com/) and battle with.

## Run (dev)

Project is a standard [NextJs](https://nextjs.org/) app. Run `yarn dev` to start.

## Component Stories

To see React components in isolation run `yarn ladle`.

## Tech stuff

- This project is a [NextJs](https://nextjs.org/) app
- Styling is handled through [Theme UI](https://theme-ui.com)
- State is handled with [XState](https://xstate.js.org/)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) is used for testing
- It uses [Atomic Design](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/) structure for organizing components
- Component stories are presented with [Ladle](https://ladle.dev/)
- Commit messages are done with [Commitizen](https://github.com/commitizen/cz-cli) using [cz-emoji-conventional](https://www.npmjs.com/package/cz-emoji-conventional) format
