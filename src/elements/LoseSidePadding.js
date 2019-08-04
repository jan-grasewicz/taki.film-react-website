import React from 'react'
import styled from 'styled-components'

const LoseSidePadding = ({ children, ...rest }) => (
  <LosePadding {...rest}>{children}</LosePadding>
)

const LosePadding = styled.div`
  position: relative;

  width: calc(${props => props.theme.mainPadding.small} * 2 + 100%);
  left: -${props => props.theme.mainPadding.small};

  ${props => props.theme.media.tablet`
      width: calc(${props => props.theme.mainPadding.medium} * 2 + 100%);
      left: -${props => props.theme.mainPadding.medium};  
    `}

  ${props => props.theme.media.desktop`
      width: calc(${props => props.theme.mainPadding.large} * 2 + 100%);
      left: -${props => props.theme.mainPadding.large};  
    `}
`
export default LoseSidePadding
