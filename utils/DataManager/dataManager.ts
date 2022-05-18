import type {
  BasicPokemonInfo,
  Nature,
  Ability,
  BasicMoveInfo,
  MoveInfo,
  PokemonInfo,
} from "../Generator/pokemon.types";

export class DataManager {
  cacheFilesRoot = "";
  indexList: BasicPokemonInfo[] = [];
  natureList: Nature[] = [];
  abilityList: Ability[] = [];
  moveList: BasicMoveInfo[] = [];
  zMoveNameList: string[] = [];
  moveTypeMap: Record<string, BasicMoveInfo[]> = {};
  fullMoveCache: Record<string, MoveInfo> = {};

  async #pooledFetch(url: string): Promise<Response> {
    const result = await fetch(url);
    if (result.status !== 200) {
      throw new Error(
        `fetch failed: ${result.url} ${result.status} ${result.statusText}`
      );
    }
    return result;
  }

  async #getList(listName: string): Promise<unknown> {
    const data = await this.#pooledFetch(
      `${this.cacheFilesRoot}${listName}.json`
    );
    return await data.json();
  }

  async #getOrLoadList<T>(
    toCheck: T[],
    listName: string,
    loadCallback: (loaded: T[]) => void
  ): Promise<T[]> {
    if (toCheck && toCheck.length > 0) {
      return Promise.resolve(toCheck);
    } else {
      const json = await this.#getList(listName);
      const asT = json as T[];
      loadCallback(asT);
      return asT;
    }
  }

  constructor(cacheFilesRoot: string) {
    this.cacheFilesRoot = cacheFilesRoot;
    console.log("(DataManager) initialized");
  }

  async ensurePreloadedLists(): Promise<void> {
    console.log("(DataManager) preloading lists");
    await Promise.all([
      this.getIndexList(),
      this.getNatureList(),
      this.getAbilityList(),
      this.getMoveList(),
    ]);
  }

  getIndexList(): Promise<BasicPokemonInfo[]> {
    return this.#getOrLoadList(this.indexList, "pokemonIndexList", (loaded) => {
      this.indexList = loaded;
      console.log(
        `(DataManager) loaded index list (${this.indexList.length} entries)`
      );
    });
  }

  getNatureList(): Promise<Nature[]> {
    return this.#getOrLoadList(this.natureList, "naturesList", (loaded) => {
      this.natureList = loaded;
      console.log(
        `(DataManager) loaded nature list (${this.natureList.length} entries)`
      );
    });
  }

  getAbilityList(): Promise<Ability[]> {
    return this.#getOrLoadList(this.abilityList, "abilitiesList", (loaded) => {
      this.abilityList = loaded;
      console.log(
        `(DataManager) loaded ability list (${this.abilityList.length} entries)`
      );
    });
  }

  getZMoveList(): Promise<string[]> {
    return this.#getOrLoadList(this.zMoveNameList, "zMovesList", (loaded) => {
      this.zMoveNameList = loaded;
      console.log(
        `(DataManager) loaded z-move list (${this.zMoveNameList.length} entries)`
      );
    });
  }

  async getMoveList(): Promise<BasicMoveInfo[]> {
    const zMoveNames = await this.getZMoveList();
    return this.#getOrLoadList(this.moveList, "movesList", (loaded) => {
      const filteredList = loaded
        /** No Dynamax moves */
        .filter((m) => m.indexNo < 757 || m.indexNo > 774)
        /** No Z-moves */
        .filter((m) => zMoveNames.indexOf(m.name.en as string) === -1);

      this.moveList = filteredList;
      this.moveTypeMap = this.moveList.reduce(
        (map: { [key: string]: BasicMoveInfo[] }, move) => ({
          ...map,
          [move.type]: [...(map[move.type] || []), move],
        }),
        {}
      );
      console.log(
        `(DataManager) loaded move list (${this.moveList.length} entries)`
      );
    });
  }

  async getPokemonByIndex(index: number): Promise<PokemonInfo> {
    const pokemonCachePath = `${this.cacheFilesRoot}pokemon/`;
    const data = await this.#pooledFetch(`${pokemonCachePath}${index}.json`);
    return await data.json();
  }

  async getMoveByIndex(index: number): Promise<BasicMoveInfo | undefined> {
    const moveList = await this.getMoveList();
    return moveList.find((move) => move.indexNo === index);
  }

  async getMoveByName(name: string): Promise<BasicMoveInfo | undefined> {
    const moveList = await this.getMoveList();
    return moveList.find((move) => move.name.en === name);
  }

  async getMovesByType(type: string): Promise<BasicMoveInfo[]> {
    await this.getMoveList();

    const basicInfoList = this.moveTypeMap[type];
    if (!basicInfoList) {
      throw new Error(`No move type named "${type}"`);
    }
    return basicInfoList;
  }

  async getFullMoveInfoByName(name: string): Promise<MoveInfo> {
    const cached = this.fullMoveCache[name];
    if (cached) {
      return cached;
    }

    const basicInfo = await this.getMoveByName(name);

    if (!basicInfo) {
      throw new Error(`No move named "${name}"`);
    }

    const moveCachePath = `${this.cacheFilesRoot}moves/`;

    const fullInfo: MoveInfo = await this.#pooledFetch(
      `${moveCachePath}${basicInfo.indexNo}.json`
    ).then((data) => data.json());

    this.fullMoveCache[name] = fullInfo;
    return fullInfo;
  }
}
