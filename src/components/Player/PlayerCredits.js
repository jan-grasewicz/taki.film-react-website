import React from 'react'
import styled from 'styled-components'

const PlayerCredits = ({ credits }) => {
  return (
    <div>
      <StyledTable>
        {credits.length !== 0 &&
          credits.map(
            (section, index) =>
              section.length !== 0 && (
                <tbody key={`section-${index + 1}`}>
                  {index !== 0 && (
                    <tr>
                      <td colSpan='2'>
                        <DividerLine />
                      </td>
                    </tr>
                  )}
                  {section.map(credit => (
                    <tr key={`${credit.name}-row`}>
                      <LeftCell>
                        <span>{credit.name}</span>
                        <Semicolon>:</Semicolon>
                      </LeftCell>
                      <RightCell>
                        {credit.entries.map(entry => (
                          <div key={`${entry}-cell`}>{entry}</div>
                        ))}
                      </RightCell>
                    </tr>
                  ))}
                </tbody>
              )
          )}
      </StyledTable>
    </div>
  )
}

PlayerCredits.defaultProps = {
  credits: []
}

const StyledTable = styled.table`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: left;
  white-space: nowrap;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet`
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0rem;
  `}
`
const LeftCell = styled.td`
  display: flex;
  justify-content: space-between;
`
const Semicolon = styled.span`
  color: ${({ theme }) => theme.color.lightblue};
  padding: 0rem 1.25rem 0rem 0.25rem;
`
const RightCell = styled.td``

const DividerLine = styled.div`
  background-color: ${({ theme }) => theme.color.darkGray};
  width: 95.25%;
  height: 1px;
  margin: 2.8125rem 0rem 1.5rem;

  ${({ theme }) => theme.media.tablet`
    margin: 1.25rem 0rem;
  `}
`

export default PlayerCredits
