import styled from 'styled-components'

const LoseSidePadding = styled.div`
  position: relative;

  width: 100vw;
  left: -${props => props.theme.mainPadding.small};

  ${props => props.theme.media.tablet`
      width: 100vw;
      left: -${props => props.theme.mainPadding.medium};  
    `}

  ${props => props.theme.media.desktop`
      width: 100vw;
      left: -${props => props.theme.mainPadding.large};  
    `}
`
export default LoseSidePadding
