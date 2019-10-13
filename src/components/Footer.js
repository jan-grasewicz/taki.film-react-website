import React, { useContext } from 'react'
import styled from 'styled-components'
import { SiteContext } from '../contexts/SiteContext'

const Footer = () => {
  const { links } = useContext(SiteContext)

  return (
    <Container>
      <Wrapper>
        <Link href={links.facebook}>facebook</Link>
        <Link href={links.instagram}>instagram</Link>
      </Wrapper>
      <Link href={links.takifilm}>taki.film 2019</Link>
    </Container>
  )
}

const Container = styled.footer`
  padding: 1.25rem 0rem;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.media.tablet`
    flex-direction: row;
    justify-content: space-between;
    padding: 3.125rem 8rem;
    `}
  ${({ theme }) => theme.media.desktop`
    padding: 3.125rem 0rem;
    `}
`
const Wrapper = styled.div`
  padding-bottom: 2.5rem;
  ${({ theme }) => theme.media.tablet`
    padding-bottom: 0rem;
    `}
`
const Link = styled.a`
  padding: 0rem 0.4375rem;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: underline;

  ${({ href, theme }) =>
    href &&
    `
    &:active {
      color: ${theme.color.lightblue};
    }
    @media (pointer: fine) and (hover: hover) {
      &:hover {
        color: ${theme.color.lightblue};
      }
    }
  `}

  /* instagram */
  ${({ theme }) => theme.media.tablet`
    padding: 0rem;
    &:nth-of-type(2) { 
      padding-left: 0.25rem;
    }
  `}
  ${({ theme }) => theme.media.desktop`
    &:nth-of-type(2) { 
      padding-left: 1.875rem;
    }
  `}
`

export default Footer
