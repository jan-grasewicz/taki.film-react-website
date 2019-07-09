import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import SiteContextProvider from "./contexts/SiteContext";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SiteContextProvider>
      <GlobalStyle />
      <Root />
    </SiteContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
