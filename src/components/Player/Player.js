import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import PlayerCredits from './PlayerCredits'
import PlayerList from './PlayerList'
import PlayerInfo from './PlayerInfo'
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
    <React.Fragment>
      <LoseSidePadding>
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
      </LoseSidePadding>
      <div>
        <PlayerInfo title={active.fullTitle} description={active.description} />
        <PlayerCredits credits={active.credits} />
      </div>
    </React.Fragment>
  )
}

const IFrameWrapper = styled.div`
  position: relative;
  padding-top: 56.5%; /* video aspect ratio */
  overflow: hidden;
`
const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

export default Player
