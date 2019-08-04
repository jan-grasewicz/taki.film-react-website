import React from "react"
import styled from "styled-components"
import Logo from "../svg/Logo"

function Header() {
  return (
    <HeaderContainer>
      <Logo dotColor="#FFF" width="3.5156rem" />
      <Mail>hej@taki.film</Mail>
      <Contact href="#contact">KONTAKT</Contact>
      <BgRectangle />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-top: 1.875rem;
`
const Mail = styled.address`
  display: none;
  ${props => props.theme.media.tablet`
    display: initial;
  `}
`
const Contact = styled.a`
  padding-top: 0.25rem;
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.s};
  font-weight: 700;

  &:active {
    text-decoration: underline;
  }
  @media (pointer: fine) and (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`
const BgRectangle = styled.div`
  background-color: ${props => props.theme.color.blue};
  height: 16.875rem;
  width: 100vw;
  position: absolute;
  z-index: -10;
  top: 0rem;
  left: -1.875rem; /* padding from Root */
`

export default Header
