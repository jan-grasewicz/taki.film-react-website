import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Arrow from '../elements/Arrow'

const CarouselArrow = props => {
  const { right, className, onClick } = props
  return <Arrow right={right} className={className} onClick={onClick} />
}

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
      <SliderWrap>
        <StyledSlider
          infinite
          speed={1000}
          autoplay
          autoplaySpeed={2000}
          slidesToShow={4}
          slidesToScroll={1}
          swipeToSlide
          pauseOnHover
          responsive={[
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2
              }
            }
          ]}
          prevArrow={<CarouselArrow />}
          nextArrow={<CarouselArrow right />}
        >
          {logotypes.map(logo => (
            <LogoWrap key={logo}>
              <Logo
                src={`${process.env.PUBLIC_URL}/img/logotypes/${logo}`}
                alt='logotype in carousel'
              />
            </LogoWrap>
          ))}
        </StyledSlider>
        <SideFog />
      </SliderWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
`
const SliderWrap = styled.div`
  position: relative;
  width: 70%;
`
const StyledSlider = styled(Slider)`
  display: flex;
  align-items: center;
  /* width: 16.25rem;
  ${({ theme }) => theme.media.tablet`
    width: 50.625rem;
  `}
  ${({ theme }) => theme.media.tablet`
    width: 68.125rem;
  `} */
  .slick-slide {
    &:focus, a {
      outline: none;
    }
  }
`
const LogoWrap = styled.div`
  pointer-events: none;
`
const Logo = styled.img`
  margin: 0 auto;
  height: 1.5rem;
  ${({ theme }) => theme.media.tablet`
    height: 2.5rem;
  `}
`
const SideFog = styled.div`
  position: absolute;
  top: 0px;
  left: -1px;
  width: calc(100% + 2px);
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 90%,
    rgba(0, 0, 0, 1) 100%
  );
`

export default Carousel
