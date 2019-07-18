import React from "react"
import styled from "styled-components"

function PlayerInfo({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <DividerLine />
      <Desc>{description}</Desc>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 0.625rem;
  padding-bottom: 0.9375rem;
  text-align: left;
`
const Title = styled.h2`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.m};
  font-weight: 800;
`
const DividerLine = styled.div`
  background-color: ${props => props.theme.color.blue};
  width: 15%;
  height: 3px;
  margin: 1.125rem 0rem 1.25rem;
`
const Desc = styled.p`
  color: ${props => props.theme.color.gray};
  font-size: ${props => props.theme.fontSize.s};
  font-weight: 400;
`

export default PlayerInfo
