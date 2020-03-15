import { createGlobalStyle } from 'styled-components'
import Reset from './Reset'

const GlobalStyle = createGlobalStyle`
  ${Reset}
  
  html, body {
    font-size: 16px;
    font-family: 'Muli', sans-serif;
    text-align: center;
    box-sizing: border-box;  
    width: 100%;
    scroll-behavior: smooth;
  }
  
  body {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.black};
  }
`

export default GlobalStyle
