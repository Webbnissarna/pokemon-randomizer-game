import { SetupOptions } from "../../molecules/Setup/Setup.types";

export interface HomeControlsProps {
  title: string;
  onPlay: (setupOptions: SetupOptions) => void;
}
