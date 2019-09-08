import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import PlayerCredits from './PlayerCredits'
import PlayerList from './PlayerList'
import PlayerDesc from './PlayerDesc'
import LoseSidePadding from '../../elements/LoseSidePadding'

const Player = ({ playlist }) => {
  const [active, setActive] = useState({})
  const initialState = playlist[3]

  useEffect(() => {
    setActive(initialState || {})
  }, [initialState])

  const handleClick = (e, video) => {
    setActive(video)
  }

  return (
    <Container>
      <StyledLoseSidePadding>
        <IFrameWrapper>
          <IFrame
            src={active && active.url}
            max-width='640'
            height='320'
            frameBorder='0'
            allow='autoplay; fullscreen'
            allowFullScreen
          />
        </IFrameWrapper>
        <PlayerList
          playlist={playlist}
          handleClick={handleClick}
          active={active}
        />
      </StyledLoseSidePadding>
      <Info>
        <PlayerDesc title={active.fullTitle} description={active.description} />
        <PlayerCredits credits={active.credits} />
      </Info>
    </Container>
  )
}

const Container = styled.div`
  padding-bottom: 3.25rem;
  ${({ theme }) => theme.media.tablet`
    padding-bottom: 12.5rem;
  `}
`
const StyledLoseSidePadding = styled(LoseSidePadding)`
  ${({ theme }) => theme.media.tablet`
    display: flex;
    flex-direction: row;
  `}
`
const IFrameWrapper = styled.div`
  position: relative;
  padding-top: 56.5%; /* video aspect ratio */
  overflow: hidden;

  ${({ theme }) => theme.media.tablet`
    min-width: 73%;
    width: 73%;
    padding-top: 41.5%;
  `}
  ${({ theme }) => theme.media.desktop`
    min-width: 66%;
    width: 66%;
    padding-top: 37.5%;
  `}
`
const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`
const Info = styled.div`
  ${({ theme }) => theme.media.tablet`
    display: flex;
    justify-content: space-between;
    width: calc(100vw * 0.73 - ${theme.mainPadding.medium});
    padding-top: 11.125rem;
  `}
  ${({ theme }) => theme.media.desktop`
    width: calc(100vw * 0.66 - ${theme.mainPadding.large});
    padding-top: 5.9375rem;
  `}
`

export default Player
