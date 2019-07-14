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
    xtitle: "4.5rem", //72px
    title: "2.625rem", //42px
    xxxl: "2.25rem", //36px
    xxl: "2rem", //32px
    xl: "1.5rem", //24px
    l: "1.25rem", //20px
    m: "1.125rem", //18px
    s: "1rem", //16px
    xs: "0.875rem", //14px
    xxs: "0.625rem" //10px
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