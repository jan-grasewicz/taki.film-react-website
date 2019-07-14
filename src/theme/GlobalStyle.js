import { createGlobalStyle } from "styled-components";
import Reset from "./Reset";

const GlobalStyle = createGlobalStyle`
  ${Reset}
  
  html, body {
    font-size: 16px;
    font-family: 'Muli', sans-serif;
    text-align: center;
    box-sizing: border-box;  
    width: 100%;
  }
  
  body {
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.black};
  }
`;

export default GlobalStyle;
