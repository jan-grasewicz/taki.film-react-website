import React from "react"
import styled from "styled-components"

function Contact() {
  return (
    <Container>
      <Title>taki.film</Title>
      <Desc>
        <p>
          Nasz zespół składa się z freelancerów.
          <br />
          Filmowców, animatorów, dżwiękowców, grafików, fotografów, producentów
          którzy są dobierani według potrzeb projektu.
        </p>
        <br />
        <p>Odpowiedni ludzie do danego projektu to podstawa.</p>
      </Desc>
      <ContactInfo>
        <Button>+48 792 211 609</Button>
        <Button>hej@taki.film</Button>
      </ContactInfo>
    </Container>
  )
}
const Container = styled.section`
  padding: 4.375rem 0rem 3.75rem;
`
const Title = styled.h2`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.xdouble};
  font-weight: 800;
`
const Desc = styled.div`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.s};
  padding-top: 1.25rem;
`
const ContactInfo = styled.address`
  padding-top: 1.5625rem;
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
  margin: 0.3125rem 0rem;
  width: 100%;
  height: 5rem;
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.xxl};
  background-color: transparent;
  border: 1px solid ${props => props.theme.color.darkGray};
  border-radius: 5px 5px 5px 5px;
`
export default Contact
