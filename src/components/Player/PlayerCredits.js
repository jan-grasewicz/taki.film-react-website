import React from "react"
import styled from "styled-components"

function PlayerCredits({ credits: { cameraMan, lights, sound, editor } }) {
  return (
    <Container>
      <List>
        <Item>camera man: {cameraMan}</Item>
        <Item>lights: {lights}</Item>
        <Item>sound: {sound}</Item>
        <Item>editor: {editor}</Item>
      </List>
      <DividerLine />
      <List>
        <Item>camera man: {cameraMan}</Item>
        <Item>lights: {lights}</Item>
        <Item>sound: {sound}</Item>
        <Item>editor: {editor}</Item>
      </List>
    </Container>
  )
}

PlayerCredits.defaultProps = {
  credits: {}
}
const Container = styled.div`
  padding-top: 0.9375rem;
  padding-bottom: 3.25rem;
`
const List = styled.ul`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.s};
  text-align: left;
`
const Item = styled.li``
const DividerLine = styled.div`
  background-color: ${props => props.theme.color.darkGray};
  width: 100%;
  height: 1px;
  margin: 2.8125rem 0rem 1.5rem;
`

export default PlayerCredits
