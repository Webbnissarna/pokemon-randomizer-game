import type {
  Ability,
  BasicMoveInfo,
  BasicPokemonInfo,
  MoveInfo,
  Nature,
  PokemonInfo,
  RNG,
} from "./pokemon.types";
import type {
  GeneratedPokemon,
  GeneratedPokemonNoExport,
  MoveListResolver,
  BasicMoveResolver,
  PokemonResolver,
  MoveResolver,
} from "./generator.types";
import {
  getUniquesFromLists,
  makeRandomUniqueList,
  getRandomFromList,
  isValid,
} from "./helper";

export function getShowdownExport({
  info,
  ability,
  nature,
  moves,
}: GeneratedPokemonNoExport) {
  return `${info.name}
Ability: ${ability.name.en}
EVs: 1 HP / 1 Atk / 1 Def / 1 SpA / 1 SpD / 1 Spe
${nature.name.en} Nature
${moves.map((move) => `- ${move.name.en}`).join("\n")}`;
}

async function getPossibleMoves(
  info: PokemonInfo,
  moveResolver: BasicMoveResolver,
  moveListResolver: MoveListResolver
): Promise<BasicMoveInfo[]> {
  const regularMoveNames = getUniquesFromLists(
    info.moves.leveling.map((m) => m.move),
    info.moves.tm.map((m) => m.move)
  );

  const regularMoveList = await Promise.all(regularMoveNames.map(moveResolver));

  const typedMoveList = (
    await Promise.all(info.types.map(moveListResolver))
  ).flat();

  const uniqueMovesSet = new Set([...regularMoveList, ...typedMoveList]);
  const allPossibleMovesList = [...uniqueMovesSet];
  return allPossibleMovesList;
}

async function getRandomMoves(
  random: RNG,
  moveList: BasicMoveInfo[],
  count: number,
  moveResolver: MoveResolver
): Promise<MoveInfo[]> {
  const randomMoveIndices = makeRandomUniqueList(
    random,
    0,
    moveList.length - 1,
    count
  );

  const moves = randomMoveIndices.map((moveIndex) => moveList[moveIndex]);
  const moveNames = moves.map((move) => move.name.en).filter<string>(isValid);
  const fullMoves = await Promise.all(
    moveNames.map((moveName) => moveResolver(moveName))
  );

  return fullMoves;
}

export async function generatePokemon(
  random: RNG,
  possiblePokemon: BasicPokemonInfo[],
  possibleNatures: Nature[],
  possibleAbilities: Ability[],
  pokemonResolver: PokemonResolver,
  basicMoveResolver: BasicMoveResolver,
  moveResolver: MoveResolver,
  moveListResolver: MoveListResolver
): Promise<GeneratedPokemon> {
  const basicPokemonInfo = getRandomFromList(random, possiblePokemon);
  const info = await pokemonResolver(basicPokemonInfo.no);

  const allPossibleMovesList = await getPossibleMoves(
    info,
    basicMoveResolver,
    moveListResolver
  );

  const moves = await getRandomMoves(
    random,
    allPossibleMovesList,
    4,
    moveResolver
  );
  const nature = getRandomFromList(random, possibleNatures);
  const ability = getRandomFromList(random, possibleAbilities);

  const pokemonInfo: GeneratedPokemonNoExport = {
    info,
    nature,
    ability,
    moves,
  };

  const showdownExport = getShowdownExport(pokemonInfo);

  return {
    ...pokemonInfo,
    showdownExport,
  };
}
