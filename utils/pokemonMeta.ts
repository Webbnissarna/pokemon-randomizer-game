import type * as CSS from "csstype";
import type { MoveDescription, Stat, Type } from "./Generator/pokemon.types";

export const TypeColors: Record<Type, CSS.Property.Color> = {
  "???": "#68A090",
  Bug: "#A8B820",
  Dark: "#6A5D55",
  Dragon: "#7038F8",
  Electric: "#F8D030",
  Fairy: "#EE99AC",
  Fighting: "#C03028",
  Fire: "#F08030",
  Flying: "#A890F0",
  Ghost: "#705898",
  Grass: "#78C850",
  Ground: "#E0C068",
  Ice: "#98D8D8",
  Normal: "#A8A878",
  Poison: "#A040A0",
  Psychic: "#F85888",
  Rock: "#B8A038",
  Steel: "#B8B8D0",
  Water: "#6890F0",
};

export const StatShortNames: Record<Stat, string> = {
  Attack: "Atk",
  Defense: "Def",
  "Sp. Attack": "Sp. Atk",
  "Sp. Defense": "Sp. Def",
  Speed: "Spd",
};

export const StatColors: Record<Stat, CSS.Property.Color> = {
  Attack: "#F08030",
  Defense: "#F8D030",
  "Sp. Attack": "#6890F0",
  "Sp. Defense": "#78C850",
  Speed: "#F85888",
};

const noStatColor: CSS.Property.Color = "#ddf";

export function getStatColor(stat: Stat | null): CSS.Property.Color {
  if (!stat) {
    return noStatColor;
  }

  return StatColors[stat];
}

export function getLatestUsefulMoveDescription(
  descriptions: MoveDescription[]
): MoveDescription {
  const invalidDescriptions = [
    // Gen 8
    "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
  ];

  const validDescriptions = descriptions.filter(
    (data) => !invalidDescriptions.includes(data.desc)
  );

  const latestValidDescription = validDescriptions.at(-1);

  if (!latestValidDescription) {
    throw new Error(
      `No seemingly valid descriptions for move ${JSON.stringify(descriptions)}`
    );
  }

  return latestValidDescription;
}
