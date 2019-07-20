import React from "react"
import styled from "styled-components"

function AboutUs() {
  return (
    <Container>
      <LogoCarousel>{"<<  Logo-Carousel  >>"}</LogoCarousel>
      <Photo
        src={process.env.PUBLIC_URL + "/img/Miniatura1.jpg"}
        alt={"taki.film at work"}
      />
      <Title>Kim jesteśmy?</Title>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum!
        Iure provident consequatur maxime, nesciunt, molestiae velit repellat
        delectus, debitis natus voluptas laborum nisi numquam fugit illum
        sapiente ad suscipit.
      </Desc>
      <BgRectangle />
    </Container>
  )
}

const Container = styled.section`
  position: relative;
`
const LogoCarousel = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.lightGray};
  height: 56px;
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
  height:  24.625rem;
  width: 100vw;
  position: absolute;
  z-index: -10;
  bottom: 0rem;
  left: -1.875rem; /* padding from Root */
  `
export default AboutUs
