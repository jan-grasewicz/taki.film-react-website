import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Arrow = ({ right, ...rest }) => {
  const theme = useContext(ThemeContext)
  return (
      <svg
        viewBox='0 0 14 24'
        width={14}
        height={24}
        {...rest}
      >
        {/* <rect width='100%' height='100%' fill='red' /> */}
        <path
          d='
          M 12 2
          L 2 12
          L 12 22'
          transform={right && 'translate(14 0) scale(-1,1)'}
          fill='none'
          stroke={theme.color.lightGray}
          strokeWidth='3'
          strokeLinecap='round'
        />
      </svg>
  )
}

export default Arrow
