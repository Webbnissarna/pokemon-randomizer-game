import { generatePokemon as generate } from "./generator";
import type { GeneratedPokemon } from "./generator.types";
import type { DataManager } from "../DataManager/dataManager";
import type { BasicMoveInfo, RNG } from "./pokemon.types";

export async function generatePokemon(
  random: RNG,
  dataManager: DataManager,
  count: number,
  onPokemonGenerated?: (pokemon: GeneratedPokemon) => void
): Promise<GeneratedPokemon[]> {
  console.log("concreteGenerator.generatePokemon", count);
  await dataManager.ensurePreloadedLists();
  const indexList = await dataManager.getIndexList();
  const natureList = await dataManager.getNatureList();
  const abilityList = await dataManager.getAbilityList();

  return await Promise.all(
    Array(count)
      .fill(null)
      .map(() =>
        generate(
          random,
          indexList,
          natureList,
          abilityList,
          (index) => dataManager.getPokemonByIndex(index),
          (name) => dataManager.getMoveByName(name) as Promise<BasicMoveInfo>,
          (type) => dataManager.getMovesByType(type)
        ).then((pokemon) => {
          onPokemonGenerated?.(pokemon);
          return pokemon;
        })
      )
  );
}
