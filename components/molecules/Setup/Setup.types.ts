export interface SetupOptions {
  playerNames: string[];
}

export interface SetupProps {
  onPlay: (setupOptions: SetupOptions) => void;
}

export enum TabValue {
  Solo = "Solo",
  TwoPlayer = "2-player",
}
