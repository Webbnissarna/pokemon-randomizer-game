import { SetupOptions } from "../../molecules/Setup/Setup.types";

export interface StartProps {
  title: string;
  sourceLink: string;
  sourceLinkTitle: string;
  onPlay: (setupOptions: SetupOptions) => void;
}
