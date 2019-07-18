import React from "react"
import styled from "styled-components"

function AboutUs() {
  return (
    <section className="aboutUs">
      <LogoCarousel>{"<<  Logo-Carousel  >>"}</LogoCarousel>
      <Photo
        src={process.env.PUBLIC_URL + "/img/Miniatura1.jpg"}
        alt={"taki.film at work"}
      />
      <h3>Kim jesteśmy?</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum!
        Iure provident consequatur maxime, nesciunt, molestiae velit repellat
        delectus, debitis natus voluptas laborum nisi numquam fugit illum
        sapiente ad suscipit.
      </p>
    </section>
  )
}

const LogoCarousel = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.lightGray};
  height: 56px;
`
const Photo = styled.img`
  padding-top: 1.875rem;
  width: 100%;
`

export default AboutUs
