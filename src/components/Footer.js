import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Link>facebook</Link>
        <Link>instagram</Link>
      </Wrapper>
      <Link>taki.film 2019</Link>
    </Container>
  )
}

const Container = styled.footer`
  padding: 1.25rem 0rem;
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.tablet`
    flex-direction: row;
    justify-content: space-between;
    padding: 3.125rem 8rem;
    `}
  ${props => props.theme.media.desktop`
    padding: 3.125rem 0rem;
    `}
`
const Wrapper = styled.div`
  padding-bottom: 2.5rem;
  ${props => props.theme.media.tablet`
    padding-bottom: 0rem;
    `}
`
const Link = styled.a`
  padding: 0rem 0.4375rem;
  color: ${props => props.theme.color.gray};
  font-size: ${props => props.theme.fontSize.m};
  text-decoration: underline;

  &:active {
    color: ${props => props.theme.color.lightblue};
  }
  @media (pointer: fine) and (hover: hover) {
    &:hover {
      color: ${props => props.theme.color.lightblue};
    }
  }

  /* instagram */
  ${props => props.theme.media.tablet`
    padding: 0rem;
    &:nth-of-type(2) { 
      padding-left: 0.25rem;
    }
  `}
  ${props => props.theme.media.desktop`
    &:nth-of-type(2) { 
      padding-left: 1.875rem;
    }
  `}
`

export default Footer
