import { render as rtlRender } from "@testing-library/react";
import { InitializeColorMode, ThemeProvider } from "theme-ui";

import theme from "../utils/theme";

import "./style.css";

export function render(ui: React.ReactElement) {
  return rtlRender(
    <>
      <InitializeColorMode />
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </>
  );
}
