import React from "react"
import styled from "styled-components"

function PlayerCredits({ credits }) {
  return (
    <StyledTable>
      {credits &&
        credits.map((section, index) => (
          <tbody key={index}>
            {index !== 0 && (
              <tr>
                <td colSpan="2">
                  <DividerLine />
                </td>
              </tr>
            )}
            {section.map(credit => (
              <tr key={`${credit.name}-row`}>
                <td>{credit.name}</td>
                <td>
                  {credit.entrys.map(entry => (
                    <div key={`${entry}-cell`}>{entry}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        ))}
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
const DividerLine = styled.div`
  background-color: ${props => props.theme.color.darkGray};
  width: 100%;
  height: 1px;
  margin: 2.8125rem 0rem 1.5rem;
`

export default PlayerCredits
