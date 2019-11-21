import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Arrow from '../elements/Arrow'

const Carousel = () => {

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
      <StyledSlider
        infinite
        speed={1000}
        autoplay
        autoplaySpeed={2000}
        slidesToShow={4}
        slidesToScroll={1}
        swipeToSlide
        pauseOnFocus
        pauseOnHover
        responsive={[
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2
            }
          }
        ]}
        prevArrow={<Arrow />}
        nextArrow={<Arrow right />}
      >
        {logotypes.map(logo => (
          <div>
            <Logo
              src={`${process.env.PUBLIC_URL}/img/logotypes/${logo}`}
            />
          </div>
        ))}
      </StyledSlider>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
`
const StyledSlider = styled(Slider)`
  display: flex;
  align-items: center;
  width: 70%;
  /* width: 16.25rem;
  ${({ theme }) => theme.media.tablet`
    width: 50.625rem;
  `}
  ${({ theme }) => theme.media.tablet`
    width: 68.125rem;
  `} */
`
const Logo = styled.img`
  margin: 0 auto;
  height: 1.5rem;
  ${({ theme }) => theme.media.tablet`
    height: 2.5rem;
  `}
`

export default Carousel
