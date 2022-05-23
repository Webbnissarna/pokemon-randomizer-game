export interface GameProp {
  mainProp: string;
  optionalProp?: string;
}

export type GamePropGetter<T> = (propSource: T) => GameProp;

export interface GamePropSystem<T> {
  getProp: GamePropGetter<T>;
}
