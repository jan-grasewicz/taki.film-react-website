import React from "react"
import styled from "styled-components"

function PlayerInfo({ title, description }) {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 0.625rem;
`

export default PlayerInfo
