import React, { useContext } from 'react'
import styled from 'styled-components'
import { SiteContext } from '../contexts/SiteContext'
import LoseSidePadding from '../elements/LoseSidePadding'

const Introduction = () => {
  const { showreel } = useContext(SiteContext)
  return (
    <Container>
      <TitleMobile>
        Cześć, <br />
        tu taki.film
      </TitleMobile>
      <ShowreelWrapper>
        <Showreel
          title='Showreel'
          src={showreel && showreel.url}
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
        />
      </ShowreelWrapper>
      <Text>
        <TitleDesktop>
          Cześć, <br />
          tu taki.film
        </TitleDesktop>
        <Header>taki.film czyli jaki?</Header>
        <Description>
          Taki który przyciąga uwagę, zapada w pamięć i&nbsp;wyróżnia się jakością.
        </Description>
        <Button href='mailto:hej@taki.film' target='_blank' rel='noopener noreferrer'>
          NAPISZ DO NAS
        </Button>
      </Text>
      <StyledLoseSidePadding posAbsolute>
        <BgRectangle />
      </StyledLoseSidePadding>
    </Container>
  )
}
const Container = styled.section`
  position: relative;
  ${({ theme }) => theme.media.tablet`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 5.6875rem;
  `}
  ${({ theme }) => theme.media.desktop`
    margin-bottom: 3.5rem;
  `}
`
const TitleMobile = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxdouble};
  font-weight: 800;
  padding: 2.8125rem 0rem 1.5rem;
  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
`
const TitleDesktop = styled.h1`
  display: none;
  ${({ theme }) => theme.media.tablet`
    display: block;
    font-size: ${({ theme }) => theme.fontSize.xxxdouble};
    font-weight: 800;
    padding: 11.4375rem 0rem 9.9375rem;
  `}
  ${({ theme }) => theme.media.desktop`
    padding-top: 10.5rem;
  `}
`
const ShowreelWrapper = styled.div`
  position: relative;
  padding-top: 50%; /* video aspect ratio */
  overflow: hidden;
  ${({ theme }) => theme.media.tablet`
    width: 70%;
    padding-top: 35%;
  `}
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
  ${({ theme }) => theme.media.tablet`
    padding-top: 0rem;
    width: 30%;
    min-width: 25rem;
  `}
`
const Header = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 800;
  padding-bottom: 0.3125rem;
  ${({ theme }) => theme.media.tablet`
    font-size: ${({ theme }) => theme.fontSize.l};
    padding-bottom: 1.1875rem
  `}
`
const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  ${({ theme }) => theme.media.tablet`
    font-size: ${({ theme }) => theme.fontSize.m};
    max-width: 25rem;
  `}
`
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.lightblue};
  border: none;
  width: 100%;
  height: 4.0625rem;
  margin: 1.875rem 0rem 2.5rem;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 20.1875rem;
    margin: 5.6875rem 0rem 9rem;
  `}
`
const StyledLoseSidePadding = styled(LoseSidePadding)`
  height: 100%;
  z-index: -10;
  top: 0rem;
`
const BgRectangle = styled.div`
  display: none;
  ${({ theme }) => theme.media.tablet`
    display: initial;
    background-color: ${({ theme }) => theme.color.blue};
    width: 100vw;
    height: 50%;
    position: absolute;
    top: 0rem;
    right: 0rem;
  `}
`
export default Introduction
