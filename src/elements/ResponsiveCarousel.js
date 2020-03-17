import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import Carousel from 'nuka-carousel'

const ResponsiveCarousel = forwardRef(({ children, ...rest }, ref) => {
  const carouselProps = {
    ref: ref,
    autoplay: true,
    autoplayInterval: 1000,
    speed: 900,
    easing: 'easeSinInOut',
    enableKeyboardControls: true,
    pauseOnHover: true,
    wrapAround: true,
    dragging: false,
    slidesToScroll: 1,
    renderBottomCenterControls: null,
    renderCenterRightControls: null,
    renderCenterLeftControls: null,
    ...rest
  }

  return (
    <React.Fragment>
      <PhoneCarouselWrap>
        <StyledCarousel slidesToShow={2} {...carouselProps}>
          {children}
        </StyledCarousel>
      </PhoneCarouselWrap>
      <DesktopCarouselWrap>
        <StyledCarousel slidesToShow={4} {...carouselProps}>
          {children}
        </StyledCarousel>
      </DesktopCarouselWrap>
    </React.Fragment>
  )
})

const CarouselWrap = css`
  position: relative;
  width: 70%;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: -1px;
    width: calc(100% + 2px);
    height: 100%;
    z-index: 1;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`
const PhoneCarouselWrap = styled.div`
  ${CarouselWrap}
  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
`
const DesktopCarouselWrap = styled.div`
  ${CarouselWrap}
  display: none;
  ${({ theme }) => theme.media.tablet`
    display: initial;
  `}
`
const StyledCarousel = styled(Carousel)`
  pointer-events: none;
  &:focus {
    outline: none;
  }
`

export default ResponsiveCarousel
