import React from 'react'
import styled from 'styled-components'

const PlayerCredits = ({ credits }) => {
  return (
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
  )
}

PlayerCredits.defaultProps = {
  credits: []
}

const StyledTable = styled.table`
  margin-top: 0.9375rem;
  margin-bottom: 3.25rem;
  width: 100%;
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.s};
  text-align: left;
`
const LeftCell = styled.td`
  display: flex;
  justify-content: space-between;
`
const Semicolon = styled.span`
  color: ${props => props.theme.color.lightblue};
  padding-right: 1.25rem;
`
const RightCell = styled.td``

const DividerLine = styled.div`
  background-color: ${props => props.theme.color.darkGray};
  width: 95.25%;
  height: 1px;
  margin: 2.8125rem 0rem 1.5rem;
`

export default PlayerCredits
