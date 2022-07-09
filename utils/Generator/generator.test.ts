import { generatePokemon } from "./generator";
import type {
  MoveInfo,
  BasicPokemonInfo,
  PokemonInfo,
  Nature,
  Ability,
} from "./pokemon.types";

const moveTackle = <MoveInfo>{
  indexNo: 33,
  name: {
    en: "Tackle",
  },
  type: "Normal",
  category: "Physical",
  pp: 35,
  power: 40,
  accuracy: 100,
  gen: 1,
  scrapeUrl: "https://bulbapedia.bulbagarden.net//wiki/Tackle_(move)",
  description: [
    {
      desc: "A physical attack in which the user charges and slams into the target with its whole body.",
      games: [
        "Pokémon Black and White Versions",
        "Pokémon Black and White Versions 2",
        "Pokémon X and Y",
        "Pokémon Omega Ruby and Alpha Sapphire",
        "Pokémon Sun and Moon",
        "Pokémon Ultra Sun and Ultra Moon",
        "Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!",
        "Pokémon Sword and Shield",
      ],
    },
  ],
};

const moveEmber = <MoveInfo>{
  indexNo: 52,
  name: {
    en: "Ember",
  },
  type: "Fire",
  category: "Special",
  pp: 25,
  power: 40,
  accuracy: 100,
  gen: 1,
  scrapeUrl: "https://bulbapedia.bulbagarden.net//wiki/Ember_(move)",
  description: [
    {
      desc: "The target is attacked with small flames. This may also leave the target with a burn.",
      games: [
        "Pokémon X and Y",
        "Pokémon Omega Ruby and Alpha Sapphire",
        "Pokémon Sun and Moon",
        "Pokémon Ultra Sun and Ultra Moon",
        "Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!",
        "Pokémon Sword and Shield",
      ],
    },
  ],
};

const moveSunnyDay = <MoveInfo>{
  indexNo: 241,
  name: {
    en: "Sunny Day",
  },
  type: "Fire",
  category: "Status",
  pp: 5,
  power: -1,
  accuracy: -1,
  gen: 2,
  scrapeUrl: "https://bulbapedia.bulbagarden.net//wiki/Sunny_Day_(move)",
  description: [
    {
      desc: "The user intensifies the sun for five turns, powering up Fire-type moves. It lowers the power of Water-type moves.",
      games: [
        "Pokémon Sun and Moon",
        "Pokémon Ultra Sun and Ultra Moon",
        "Pokémon Sword and Shield",
      ],
    },
  ],
};

const moveFirePunch = <MoveInfo>{
  indexNo: 7,
  name: {
    en: "Fire Punch",
  },
  type: "Fire",
  category: "Physical",
  pp: 15,
  power: 75,
  accuracy: 100,
  gen: 1,
  scrapeUrl: "https://bulbapedia.bulbagarden.net//wiki/Fire_Punch_(move)",
  description: [
    {
      desc: "The target is punched with a fiery fist. This may also leave the target with a burn.",
      games: [
        "Pokémon X and Y",
        "Pokémon Omega Ruby and Alpha Sapphire",
        "Pokémon Sun and Moon",
        "Pokémon Ultra Sun and Ultra Moon",
        "Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!",
        "Pokémon Sword and Shield",
      ],
    },
  ],
};

describe("Generator", () => {
  it("generates random Pokémon", async () => {
    const random = Math.random;

    const fakeBasicPokemon = <BasicPokemonInfo>{
      gen: 1,
      no: 1,
      name: "Fakemon",
      scrapeUrl: "",
    };

    const fakePokemon = <PokemonInfo>{
      name: {
        en: "Fakemon",
      },
      nationalDexNo: 1,
      category: "Fake",
      types: ["Fire"],
      moves: {
        leveling: [{ level: 1, move: "Tackle" }],
        tm: [{ tm: 1, move: "Sunny Day" }],
      },
      imageData: "",
    };

    const fakeNature = <Nature>{
      name: {
        en: "Fake Nature",
      },
      indexNo: 1,
      increasedStat: "Attack",
      decreasedStat: "Defense",
    };

    const fakeAbility = <Ability>{
      gen: 1,
      indexNo: 1,
      name: {
        en: "Fake Ability",
      },
      description: "This is a fake ability",
    };

    const moveMap: { [key: string]: MoveInfo } = {
      moveTackle,
      moveEmber,
      moveFirePunch,
      moveSunnyDay,
    };

    const getMove = (moveName: string) =>
      Promise.resolve(moveMap[`move${moveName.replace(" ", "")}`]);

    const pokemon = await generatePokemon(
      random,
      [fakeBasicPokemon],
      [fakeNature],
      [fakeAbility],
      () => Promise.resolve(fakePokemon),
      getMove,
      getMove,
      () =>
        Promise.resolve([moveTackle, moveEmber, moveFirePunch, moveSunnyDay])
    );

    expect(pokemon).not.toBeNull();
    expect(pokemon).toBeDefined();

    Object.keys(fakePokemon).forEach((key) =>
      expect(pokemon.info).toHaveProperty(key, (<never>fakePokemon)[key])
    );

    Object.values(moveMap).forEach((move) =>
      expect(pokemon.moves).toContain(move)
    );

    expect(pokemon.ability).toBe(fakeAbility);
    expect(pokemon.nature).toBe(fakeNature);
  });
});
