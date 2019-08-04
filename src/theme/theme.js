import { css } from 'styled-components'

const screens = {
  // desktop: 1920x1080
  desktop: '1600',
  // tablet: 1440x1080
  tablet: '1000'
  // phone: 375x667
}

export const theme = {
  color: {
    white: '#FFFFFF',
    lightGray: '#E0E0E0',
    gray: '#808080',
    darkGray: '#333333',
    black: '#000000',
    lightblue: '#0040FF',
    blue: '#0000FF'
  },
  fontSize: {
    //72px // 90px
    xxxdouble: '4.5rem; line-height: 5.625rem',
    //42px // 53px
    xxdouble: '2.625rem; line-height: 3.3125rem',
    //36px // 45px
    xdouble: '2.25rem; line-height: 2.8125rem',
    //32px // 40px
    double: '2rem; line-height: 2.5rem',
    //24px // 30px
    xxl: '1.5rem; line-height: 1.875rem',
    //20px // 25px
    xl: '1.25rem; line-height: 1.5625rem',
    //18px // 24px
    l: '1.125rem; line-height: 1.5rem',
    //16px // 20px
    m: '1rem; line-height: 1.25rem',
    //14px // 18px
    s: '0.875rem; line-height: 1.125rem',
    //10px //13px
    xs: '0.625rem; line-height: 0.8125rem'
  },
  media: Object.keys(screens).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${screens[label]}px) {
        ${css(...args)};
      }
    `
    return acc
  }, {})
}
