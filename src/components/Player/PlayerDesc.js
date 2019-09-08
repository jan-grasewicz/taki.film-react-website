import React from 'react'
import styled from 'styled-components'

const PlayerDesc = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DividerLine />
      <Desc>{description}</Desc>
    </Container>
  )
}

const Container = styled.div`
  padding: 0.625rem 0rem 30px;
  text-align: left;

  ${({ theme }) => theme.media.tablet`
    padding: 0rem ${({ theme }) => theme.mainPadding.medium} 0rem 0rem;
  `}
  ${({ theme }) => theme.media.desktop`
    padding: 0rem ${({ theme }) => theme.mainPadding.large} 0rem 0rem;
  `}
`
const Title = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 800;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fontSize.l};
  `}
  ${({ theme }) => theme.media.desktop`
    font-size: ${theme.fontSize.xl};
  `}
`
const DividerLine = styled.div`
  background-color: ${({ theme }) => theme.color.blue};
  width: 2.9475rem;
  height: 3px;
  margin: 1.125rem 0rem 1.25rem;

  ${({ theme }) => theme.media.tablet`
    margin: 1.625rem 0rem 1.875rem;
  `}
  ${({ theme }) => theme.media.desktop`
    margin: 1.25rem 0rem 1.875rem;
  `}
`
const Desc = styled.p`
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fontSize.l};
  `}
`

export default PlayerDesc
