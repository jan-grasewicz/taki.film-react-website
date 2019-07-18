import React from "react"
import styled from "styled-components"

function PlayerList({ playlist, handleClick, active }) {
  return (
    <List>
      {playlist &&
        playlist.map(video => (
          <Item
            key={video.url}
            onClick={e => handleClick(e, video)}
            isActive={video.url === active.url}
          >
            {video.title}
          </Item>
        ))}
    </List>
  )
}

const List = styled.ul`
  display: flex;
  align-items: center;
  overflow: auto;

  padding: 1.875rem 0rem;
`
const Item = styled.li`
  color: ${props => props.theme.color[props.isActive ? "white" : "gray"]};
  font-size: ${props => props.theme.fontSize[props.isActive ? "xxl" : "xs"]};
  font-weight: 400;
  white-space: nowrap;
  padding: 0.3125rem;
`

export default PlayerList