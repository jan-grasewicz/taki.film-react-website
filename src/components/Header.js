import React from "react"
import styled from "styled-components"

function Header() {
  return (
    <HeaderContainer>
      <h2>
        taki
        <br />
        .film
      </h2>
      <address>hej@taki.film</address>
      <a>KONTAKT</a>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

export default Header
