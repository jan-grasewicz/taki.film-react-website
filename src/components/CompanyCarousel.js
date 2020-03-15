import React, { useRef } from 'react'
import styled from 'styled-components'
import Arrow from '../elements/Arrow'
import ResponsiveCarousel from '../elements/ResponsiveCarousel'

const CompanyCarousel = () => {
  const carouselRef = useRef(null)

  const logotypes = [
    'logotype1.png',
    'logotype2.png',
    'logotype3.png',
    'logotype4.png',
    'logotype5.png',
    'logotype6.png',
    'logotype7.png',
    'logotype8.png'
  ]

  return (
    <Container>
      <Button
        onClick={() =>
          carouselRef &&
          carouselRef.current &&
          carouselRef.current.previousSlide()
        }
      >
        <StyledArrow />
      </Button>
      <ResponsiveCarousel ref={carouselRef}>
        {logotypes.map(logo => (
          <LogoWrap key={logo}>
            <Logo
              src={`${process.env.PUBLIC_URL}/img/logotypes/${logo}`}
              alt='logotype in carousel'
            />
          </LogoWrap>
        ))}
      </ResponsiveCarousel>
      <Button
        onClick={() =>
          carouselRef && carouselRef.current && carouselRef.current.nextSlide()
        }
      >
        <StyledArrow right />
      </Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
`
const Button = styled.button`
  background: none;
  border: none;
  height: 100%;
  padding: 8px;
  transform: scale(1);
  transition: transform 0.1s linear;
  &:hover {
    cursor: pointer;
  }
  &:focus ${StyledArrow} {
    outline: none;
    transform: scale(1.1);
  }
  &:active ${StyledArrow} {
    transform: scale(0.85);
  }
`
const StyledArrow = styled(Arrow)`
  height: 20px;
`
const LogoWrap = styled.div`
  pointer-events: none;
  height: 100%;
`
const Logo = styled.img`
  margin: 0 auto;
  height: 1.5rem;
  ${({ theme }) => theme.media.tablet`
    height: 2.5rem;
  `}
`

export default CompanyCarousel
