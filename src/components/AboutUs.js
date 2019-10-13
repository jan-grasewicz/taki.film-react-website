import React from 'react'
import styled from 'styled-components'
import LoseSidePadding from '../elements/LoseSidePadding'

const AboutUs = () => {
  return (
    <Container>
      <Photo
        src={process.env.PUBLIC_URL + '/img/Miniatura1.jpg'}
        alt={'taki.film at work'}
      />
      <Text>
        <Title>Kim jesteśmy?</Title>
        <Desc>
          Ekipą z trójmiasta która kocha tworzyć filmy.
          <br />
          Marka taki.film jest odpowiedzią na potrzeby naszych dotychczasowych
          klientów. Wcześniej działaliśmy pod marką SureArts. Działamy na
          terenie całego świata i nie boimy się żadnych wyzwań.
        </Desc>
      </Text>
      <StyledLoseSidePadding posAbsolute>
        <BgRectangle />
      </StyledLoseSidePadding>
    </Container>
  )
}

const Container = styled.section`
  margin-top: 1.875rem;
  position: relative;
  ${({ theme }) => theme.media.tablet`
    display: flex;
    align-items: center;;
  `}
`
const Photo = styled.img`
  width: 100%;
  ${({ theme }) => theme.media.tablet`
    width: auto;
  `}
`
const Text = styled.div`
  box-sizing: border-box;
  padding-top: 0.625rem;
  padding-bottom: 1.25rem;
  ${({ theme }) => theme.media.tablet`
    text-align: left;
    padding: 5.4375rem 0rem;
    padding-right: 3.5rem;
    padding-left: 4.5rem;
    // min-width: 42.0625rem;
  `}
  ${({ theme }) => theme.media.desktop`
    padding-right: 4.9375rem;
    padding-left: 5.9375rem;
    // min-width: 57.9375rem;
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
const Desc = styled.p`
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
