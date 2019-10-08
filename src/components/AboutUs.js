import React from 'react'
import styled from 'styled-components'
import LoseSidePadding from '../elements/LoseSidePadding'

const AboutUs = () => {
  return (
    <Container>
      <LogoCarousel>{'<<  Logo-Carousel  >>'}</LogoCarousel>
      <Photo
        src={process.env.PUBLIC_URL + '/img/Miniatura1.jpg'}
        alt={'taki.film at work'}
      />
      <Title>Kim jesteśmy?</Title>
      <Desc>
        Ekipą z trójmiasta która kocha tworzyć filmy.<br />
        Marka taki.film jest odpowiedzią na potrzeby naszych dotychczasowych
        klientów. Wcześniej działaliśmy pod marką SureArts.<br />
        Działamy na terenie całego świata i nie boimy się żadnych wyzwań.
      </Desc>
      <LoseSidePadding>
        <BgRectangle />
      </LoseSidePadding>
    </Container>
  )
}

const Container = styled.section``

const LogoCarousel = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.lightGray};
  height: 3.5rem;
`
const Photo = styled.img`
  padding: 1.875rem 0rem 0.625rem;
  width: 100%;
`
const Title = styled.h3`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.xdouble};
  font-weight: 800;
`
const Desc = styled.p`
  padding: 1.25rem 0rem;
`
const BgRectangle = styled.div`
  background-color: ${props => props.theme.color.lightblue};
  height: 24.625rem;
  width: 100vw;
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  z-index: -10;
`
export default AboutUs
