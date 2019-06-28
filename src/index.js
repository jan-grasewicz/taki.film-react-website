import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Root />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById("root")
);
