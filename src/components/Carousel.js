import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// const NextArrow = ({ className, onClick, style }) => {
//   return (
//     <Arrow
//       className={'slick-next slick-arrow'}
//       onClick={onClick}
//       // style={{ ...style, display: 'block' }}
//     >
//       >>>
//     </Arrow>
//   )
// }

// const Arrow = styled.div``

const Carousel = () => {
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
        // prevArrow={<PrevArrow />}
        // nextArrow={<NextArrow />}
      >
        <div>
          <Logo src={process.env.PUBLIC_URL + '/img/logotypes/logotype1.png'} />
        </div>
        <div>
          <Logo src={process.env.PUBLIC_URL + '/img/logotypes/logotype2.png'} />
        </div>
        <div>
          <Logo src={process.env.PUBLIC_URL + '/img/logotypes/logotype3.png'} />
        </div>
        <div>
          <Logo src={process.env.PUBLIC_URL + '/img/logotypes/logotype4.png'} />
        </div>
        <div>
          <Logo src={process.env.PUBLIC_URL + '/img/logotypes/logotype5.png'} />
        </div>
        <div>
          <Logo src={process.env.PUBLIC_URL + '/img/logotypes/logotype6.png'} />
        </div>
        <div>
          <Logo src={process.env.PUBLIC_URL + '/img/logotypes/logotype7.png'} />
        </div>
        <div>
          <Logo src={process.env.PUBLIC_URL + '/img/logotypes/logotype8.png'} />
        </div>
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
  /* color: ${props => props.theme.color.lightGray}; */
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
