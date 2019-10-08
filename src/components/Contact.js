import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Container id='contact'>
      <Title>taki.film</Title>
      <Descr>
        Nasz zespół składa się z freelancerów.
        <br />
        Filmowców, animatorów, dżwiękowców, grafików, fotografów, producentów
        którzy są dobierani według potrzeb projektu.
        <br />
        <br />
        Odpowiedni ludzie do danego projektu to podstawa.
      </Descr>
      <ContactInfo>
        <Button>+48 792 211 609</Button>
        <Button>hej@taki.film</Button>
      </ContactInfo>
    </Container>
  )
}
const Container = styled.section`
  padding: 2rem 0rem;
  margin: 2.375rem 0rem 1.75rem;

  ${({ theme }) => theme.media.tablet`
    margin: 18.1875rem 0rem 10.6875rem;
  `}
`
const Title = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xdouble};
  font-weight: 800;
`
const Descr = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding-top: 1.25rem;
  ${({ theme }) => theme.media.tablet`
    font-size: ${({ theme }) => theme.fontSize.l};
    padding-top: 3.125rem;
  `}
`
const ContactInfo = styled.address`
  padding-top: 1.5625rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet`
    flex-direction: row-reverse;
    justify-content: center;
    padding-top: 6.625rem;
  `}
`
const Button = styled.button`
  margin: 0.3125rem 0rem;
  width: 100%;
  height: 5rem;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.darkGray};
  border-radius: 5px 5px 5px 5px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${({ theme }) => theme.fontSize.double};
    margin: 0rem 0.5rem;
    max-width: 27.25rem;
    height: 7.6875rem;
  `}
  ${({ theme }) => theme.media.desktop`
    max-width: 28.625rem;
  `}
`
export default Contact
