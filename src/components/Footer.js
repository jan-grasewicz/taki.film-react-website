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
`
const Wrapper = styled.div`
  padding-bottom: 2.5rem;
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
`

export default Footer
