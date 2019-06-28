import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import { ThemeProvider } from "styled-components";
import { theme } from "./contexts/theme";

import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>,
  document.getElementById("root")
);
