import type { GlobalProvider } from "@ladle/react";
import { InitializeColorMode, ThemeProvider } from "theme-ui";
import theme from "../utils/theme";

import "./style.css";

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <>
    <InitializeColorMode />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
