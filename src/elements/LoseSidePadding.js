import styled from 'styled-components'

const addMinusIfBoolean = (string, boolean) => (boolean ? '-' + string : string)

const LoseSidePadding = styled.div`
  position: ${({ posAbsolute }) => (posAbsolute ? 'absolute' : 'relative')};
  width: 100vw;
  right: ${({ theme, posAbsolute }) =>
    addMinusIfBoolean(theme.mainPadding.small, posAbsolute)};

  ${({ theme }) => theme.media.tablet`
      width: 100vw;
      right: ${({ theme, posAbsolute }) =>
        addMinusIfBoolean(theme.mainPadding.medium, posAbsolute)};  
    `}

  ${({ theme }) => theme.media.desktop`
      width: 100vw;
      right: ${({ theme, posAbsolute }) =>
        addMinusIfBoolean(theme.mainPadding.large, posAbsolute)};
    `}
`

export default LoseSidePadding
