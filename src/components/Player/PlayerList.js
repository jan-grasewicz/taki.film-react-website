import React from 'react'
import styled from 'styled-components'

const PlayerList = ({ playlist, handleClick, active }) => {
  return (
    <Container>
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
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const List = styled.ul`
  display: flex;
  align-items: center;

  overflow: auto;
  padding: 1.875rem 0rem;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    overflow: hidden;
    padding: 0rem 0rem 0rem 3.75rem;
  `}
`
const Item = styled.li`
  color: ${({ theme, isActive }) => theme.color[isActive ? 'white' : 'gray']};
  font-size: ${({ theme, isActive }) =>
    theme.fontSize[isActive ? 'xxl' : 'xs']};
  font-weight: ${({ isActive }) => (isActive ? '800' : '400')};
  white-space: nowrap;
  padding: 0rem 0.3125rem;
  cursor: pointer;

  ${({ theme, isActive }) => theme.media.tablet`
    font-size: ${theme.fontSize[isActive ? 'double' : 'l']};
    line-height: 2.5rem; // line-height of active
    padding: 0rem;
  `}
`

export default PlayerList
