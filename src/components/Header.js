import React from 'react'
import styled from 'styled-components'
import Logo from '../svg/Logo'
import LoseSidePadding from '../elements/LoseSidePadding'

const Header = () => {
  return (
    <LoseSidePadding>
      <HeaderContainer>
        <Logo dotColor='#FFF' width='3.5156rem' />
        <Mail>hej@taki.film</Mail>
        <Contact href='#contact'>KONTAKT</Contact>
        <BgRectangle />
      </HeaderContainer>
    </LoseSidePadding>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 1.875rem 1.875rem 0rem;

  ${({ theme }) => theme.media.tablet`
    align-items: flex-end;
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding: 2.625rem 2.625rem 0rem;
  `}
  ${({ theme }) => theme.media.desktop`
    align-items: center;
    padding-left: 3.375rem;
  `}
`
const Mail = styled.address`
  display: none;
  ${({ theme }) => theme.media.tablet`
    display: initial;
    margin-left: 2.4169rem;
  `}
  ${({ theme }) => theme.media.desktop`
    margin-left: 1.6669rem;
  `}
`
const Contact = styled.a`
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;

  &:active {
    text-decoration: underline;
  }
  @media (pointer: fine) and (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`
const BgRectangle = styled.div`
  background-color: ${({ theme }) => theme.color.blue};
  height: 16.875rem;
  width: 100vw;
  position: absolute;
  z-index: -10;
  top: 0rem;
  left: 0rem;
  ${({ theme }) => theme.media.tablet`
    height: 101%;
  `}
`

export default Header
