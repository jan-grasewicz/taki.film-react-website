import React from 'react'
import styled from 'styled-components'

const LoseSidePadding = ({ children, ...rest }) => (
  <LosePadding {...rest}>{children}</LosePadding>
)

const LosePadding = styled.div`
  position: relative;
  width: calc(1.875rem * 2 + 100%);
  left: -1.875rem; /* padding from Root */
`
export default LoseSidePadding
