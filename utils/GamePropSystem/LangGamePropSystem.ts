import type { GeneratedPokemon } from "../Generator/generator.types";
import type {
  GameProp,
  GamePropGetter,
  GamePropSystem,
} from "./GamePropSystem.types";
import type { ValidLanguages } from "./LangGamePropSystem.types";

const japaneseGamePropSystem: GamePropSystem<GeneratedPokemon> = {
  getProp(pokemon): GameProp {
    return {
      mainProp: pokemon.info.name.ja ?? "<oops>",
      optionalProp: "TODO: romanji ツ",
    };
  },
};

const languageGetterMap: Partial<
  Record<ValidLanguages, GamePropSystem<GeneratedPokemon>>
> = {
  ja: japaneseGamePropSystem,
};

function makeFallbackLangSystem(lang: ValidLanguages) {
  const fallbackSystem: GamePropSystem<GeneratedPokemon> = {
    getProp(pokemon): GameProp {
      return {
        mainProp: pokemon.info.name[lang] ?? "<oof>",
      };
    },
  };
  return fallbackSystem;
}

export function makeLangGetter(
  lang: ValidLanguages
): GamePropGetter<GeneratedPokemon> {
  const langPropSystem =
    languageGetterMap[lang] ?? makeFallbackLangSystem(lang);
  return (pokemon) => langPropSystem.getProp(pokemon);
}
