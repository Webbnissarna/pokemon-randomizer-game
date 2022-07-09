import type { RNG } from "./pokemon.types";

export function getRandomInRange(
  random: RNG,
  min: number,
  max: number
): number {
  const range = max - min + 1;
  return Math.floor(min + random() * range);
}

export function makeRandomUniqueList(
  random: RNG,
  min: number,
  max: number,
  count: number
): number[] {
  const numbers = Array(max - min + 1)
    .fill(0)
    .map((_, index) => min + index)
    .sort(() => random() - 0.5);
  return numbers.slice(0, count);
}

export function getUniquesFromLists<T>(...lists: T[][]): T[] {
  const flattened = lists.flat();
  const uniqueSet = new Set([...flattened]);
  return [...uniqueSet];
}

export function getRandomFromList<T>(random: RNG, list: T[]): T {
  const index = getRandomInRange(random, 0, list.length - 1);
  return list[index];
}

export function isValid<T>(value: T | null | undefined): value is T {
  return !!value;
}
