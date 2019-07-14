import React from "react"
import styled from "styled-components"
import Logo from "../svg/Logo"

function Header() {
  return (
    <HeaderContainer>
      <Logo dotColor="#FFF" width="3.5156rem" />
      <Mail>hej@taki.film</Mail>
      <Contact>KONTAKT</Contact>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Mail = styled.address`
  display: none;
  ${props => props.theme.media.tablet`
    display: initial;
  `}
`
const Contact = styled.a`
  font-size: ${props => props.theme.fontSize.s};
  font-weight: 700;
  padding-top: 0.25rem;
`

export default Header
