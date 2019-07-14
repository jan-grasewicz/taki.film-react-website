import React, { useContext } from "react"
import { SiteContext } from "../contexts/SiteContext"
import styled from "styled-components"

function Introduction() {
  const { showreel } = useContext(SiteContext)
  return (
    <section className="introduction">
      <Title>
        Cześć, <br />
        tu taki.film
      </Title>
      <ShowreelWrapper>
        <Showreel
          src={showreel.length && showreel[0].url}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </ShowreelWrapper>
      <Text>
        <Header>taki.film czyli jaki?</Header>
        <Descriotion>
          Taki który przyciąga uwagę, zapada w pamięć i&nbsp;wyróżnia się
          jakością.
        </Descriotion>
      <Button>NAPISZ DO NAS</Button>
      </Text>
    </section>
  )
}

const Title = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  font-weight: 800;
  line-height: 3.3125rem;
  padding: 2.8125rem 0rem 1.5rem;
`
const ShowreelWrapper = styled.div`
  position: relative;
  padding-top: 50%; /* video aspect ratio */
  overflow: hidden;
`
const Showreel = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`
const Text = styled.div`
  text-align: left;
  padding-top: 1.375rem;
`
const Header = styled.h3`
  font-size: ${props => props.theme.fontSize.s};
  font-weight: 800;
  line-height: 1.25rem;
  padding-bottom: 0.3125rem;
`
const Descriotion = styled.p`
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 400;
  line-height: 1.125rem;
`
const Button = styled.button`
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 800;
  line-height: 1.125rem;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.lightblue};
  border: none;
  width: 100%;
  height: 4.0625rem;

  margin: 1.875rem 0rem 2.5rem;
`
export default Introduction
