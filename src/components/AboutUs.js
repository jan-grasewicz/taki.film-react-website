import React, { useContext } from 'react'
import styled from 'styled-components'
import { SiteContext } from '../contexts/SiteContext'
import LoseSidePadding from '../elements/LoseSidePadding'

const AboutUs = () => {
  const { aboutUs } = useContext(SiteContext)

  return (
    <Container>
      <Photo
        src={`${process.env.PUBLIC_URL}/img/atWork1-w2000px-compressed.jpg`}
        alt={'taki.film at work'}
      />
      <Text>
        <Title>Kim jesteśmy?</Title>
        <Desc>{aboutUs && aboutUs.desc.map((line, index) => <p key={index}>{line}</p>)}</Desc>
      </Text>
      <StyledLoseSidePadding posAbsolute>
        <BgRectangle />
      </StyledLoseSidePadding>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.875rem;
  position: relative;
  ${({ theme }) => theme.media.tablet`
    flex-direction: row;
    margin-top: 18.75rem;
  `}
  ${({ theme }) => theme.media.desktop`
    margin-top: 18.625rem;  
  `}
`
const Photo = styled.img`
  position: relative;
  max-width: 38.125rem;
  width: 100%;
  ${({ theme }) => theme.media.tablet`
    bottom: 5rem;
    max-width: initial;
    width: 34.375rem;
  `}
  ${({ theme }) => theme.media.desktop`
    bottom: 6rem;
    width: 48.375rem;
  `}
`
const Text = styled.div`
  box-sizing: border-box;
  padding-top: 0.625rem;
  padding-bottom: 1.25rem;
  max-width: 38.125rem;
  ${({ theme }) => theme.media.tablet`
    text-align: left;
    padding: 2rem 0rem;
    padding-right: 3.5rem;
    padding-left: 4.5rem;
    max-width: initial;
  `}
  ${({ theme }) => theme.media.desktop`
    padding-right: 4.9375rem;
    padding-left: 5.9375rem;
  `}
`
const Title = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xdouble};
  font-weight: 800;
  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fontSize.xxxdouble};
  `}
`
const Desc = styled.section`
  padding-top: 1.25rem;
  ${({ theme }) => theme.media.tablet`
    padding-top: 2.5rem;
    font-size: ${({ theme }) => theme.fontSize.l};
    max-width: 52.5625rem;
  `}
`
const StyledLoseSidePadding = styled(LoseSidePadding)`
  height: 100%;
  z-index: -10;
  bottom: 0rem;
`
const BgRectangle = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.lightblue};
  height: 85%;
  width: 100vw;
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  ${({ theme }) => theme.media.tablet`
    height: 100%;
  `}
`

export default AboutUs
