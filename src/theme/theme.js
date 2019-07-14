import { css } from "styled-components"

// media
// desktop: 1920x1080
//bp 1600
// tablet: 1440x1080
//bp 1000
// phone: 375x667

const screens = {
  desktop: "1600",
  tablet: "1000"
}

export const theme = {
  color: {
    white: "#FFFFFF",
    lightGray: "#E0E0E0",
    gray: "#808080",
    darkGray: "#333333",
    black: "#000000",
    lightblue: "#0040FF",
    blue: "#0000FF"
  },
  fontSize: {
    xtitle: "72px", //72px
    title: "42px", //42px
    xxxl: "36px", //36px
    xxl: "32px", //32px
    xl: "24px", //24px
    l: "20px", //20px
    m: "18px", //18px
    s: "16px", //16px
    xs: "14px", //14px
    xxs: "10px" //10px
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