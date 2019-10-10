import React from 'react'
import styled from 'styled-components'
import LoseSidePadding from '../elements/LoseSidePadding'

const AboutUs = () => {
  return (
    <Container>
      <Content>
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
      </Content>
      <LoseSidePadding>
        <BgRectangle />
      </LoseSidePadding>
    </Container>
  )
}

const Container = styled.section``
const Content = styled.div`
  ${({ theme }) => theme.media.tablet`
    display: flex;
    align-items: flex-end;
  `}
`
const Photo = styled.img`
  padding-top: 1.875rem;
  width: 100%;
  ${({ theme }) => theme.media.tablet`
    width: auto;
    max-width: 50%;
  `}
`
const Text = styled.div`
  padding-top: 0.625rem;
  padding-bottom: 1.25rem;
  ${({ theme }) => theme.media.tablet`
    text-align: left;
    padding: 5.4375rem 0rem;
    padding-right: 3.5rem;
    padding-left: 4.5rem;
    min-width: 30.8125rem;
  `}
  ${({ theme }) => theme.media.desktop`
    padding-right: 4.9375rem;
    padding-left: 5.9375rem;
  `}
`
const Title = styled.h3`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.xdouble};
  font-weight: 800;
  ${({ theme }) => theme.media.tablet`
    font-size: ${props => props.theme.fontSize.xxxdouble};
  `}
`
const Desc = styled.p`
  padding-top: 1.25rem;
  ${({ theme }) => theme.media.tablet`
    padding-top: 2.5rem;
    font-size: ${props => props.theme.fontSize.l};
  `}
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
