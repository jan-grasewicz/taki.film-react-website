import React, { useRef } from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import Arrow from '../elements/Arrow'

const Carousel3 = () => {
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
      <Button>
        <Arrow
          onClick={() =>
            carouselRef &&
            carouselRef.current &&
            carouselRef.current.previousSlide()
          }
        />
      </Button>
      <SliderWrap>
        <StyledSlider
          ref={carouselRef}
          autoplay
          autoplayInterval={1000}
          speed={900}
          easing='easeSinInOut'
          enableKeyboardControls
          pauseOnHover
          wrapAround
          slidesToShow={2}
          slidesToScroll={1}
          // width='70%'
          // height='2rem'
          renderBottomCenterControls={null}
          renderCenterRightControls={null}
          renderCenterLeftControls={null}
        >
          {/* <StyledSlider
          slidesToShow={4}
          responsive={[
              breakpoint: 1100,
              settings: {
                slidesToShow: 2
        > */}
          {logotypes.map(logo => (
            <LogoWrap key={logo}>
              <Logo
                src={`${process.env.PUBLIC_URL}/img/logotypes/${logo}`}
                alt='logotype in carousel'
              />
            </LogoWrap>
          ))}
        </StyledSlider>
      </SliderWrap>
      <Button>
        <Arrow
          right
          onClick={() =>
            carouselRef &&
            carouselRef.current &&
            carouselRef.current.nextSlide()
          }
        />
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
const SliderWrap = styled.div`
  // position: relative;
  width: 70%;
  // width: 100%;
`
const StyledSlider = styled(Carousel)`
  box-shadow: 
  inset 40px 0px 25px -25px ${({ theme }) => theme.color.blue}, 
  inset -40px 0px 25px -25px ${({ theme }) => theme.color.black};

  // display: flex;
  // align-items: center;
//   width: 16.25rem;
//   ${({ theme }) => theme.media.tablet`
//     width: 50.625rem;
//   `}
//   ${({ theme }) => theme.media.tablet`
//     width: 68.125rem;
//   `}

  .slider-slide {
    &:focus, a {
      outline: none;
    }
  }
`
const Button = styled.button`
  background: none;
  border: 0px solid red;
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

export default Carousel3
