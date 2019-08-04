import React from 'react'

const Logo = ({ mainColor, dotColor, width, height, ...rest }) => {
  return (
    <div {...rest} style={{ width: width, height: height }}>
      <svg
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 262 214.1'
      >
        <path
          className='st0'
          d='M262.2,167.3v43.1c0,1.2-1,2.2-2.2,2.2h-19.5c-1.2,0-2.2-1-2.2-2.2v-35.7c0-7.5-3.1-11.6-9-11.6 c-5.8,0-9,4-9,11.6v35.7c0,1.2-1,2.2-2.2,2.2h-19.4c-1.2,0-2.2-1-2.2-2.2v-35.7c0-7-3.1-11.6-9-11.6c-5.8,0-9,4-9,11.6v35.7 c0,1.2-1,2.2-2.2,2.2H157c-1.2,0-2.2-1-2.2-2.2v-63.7c0-1.2,1-2.2,2.2-2.2h19.5c1.2,0,2.2,1,2.2,2.2v6c5-6.1,12.5-10,19.8-10 c7.3,0,13.8,3.6,17.8,9.1c4.5-5.6,11.5-9.2,21.4-9.1C251.2,142.7,262.2,153.7,262.2,167.3z M145.8,210.1v-91.9c0-1.2-1-2.2-2.2-2.2 h-19.4c-1.2,0-2.2,1-2.2,2.2v91.9c0,1.2,1,2.2,2.2,2.2h19.4C144.8,212.3,145.8,211.3,145.8,210.1z M112.9,210.2v-63.7 c0-1.2-1-2.2-2.2-2.2H91.3c-1.2,0-2.2,1-2.2,2.2v63.7c0,1.2,1,2.2,2.2,2.2h19.4C111.9,212.4,112.9,211.4,112.9,210.2z M101.4,139.5 h-0.7c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h0.7c7.2,0,13,5.8,13,13v0C114.3,133.6,108.5,139.5,101.4,139.5z M77.8,144.3H66 v-3.9c0-3.6,2-5.6,4.9-5.6c1.5,0,2.7,0.3,3.6,0.6c1.2,0.5,2.6-0.2,3-1.5l4.2-15.5c0.3-1-0.2-2.1-1.2-2.6c-3.6-1.6-8.2-2.5-15.1-2.5 c-12.8,0-23.1,10.4-23.1,26.1v4.7H35c-1.2,0-2.2,1-2.2,2.2v15.4c0,1.2,1,2.2,2.2,2.2h7.1v46.1c0,1.2,1,2.2,2.2,2.2h19.4 c1.2,0,2.2-1,2.2-2.2v-46.1h11.9c1.2,0,2.2-1,2.2-2.2v-15.4C80,145.3,79,144.3,77.8,144.3z M245.8,96.7V33c0-1.2-1-2.2-2.2-2.2 h-19.4c-1.2,0-2.2,1-2.2,2.2v63.7c0,1.2,1,2.2,2.2,2.2h19.4C244.8,98.9,245.8,97.9,245.8,96.7z M234.2,26h-0.7c-7.2,0-13-5.8-13-13 v0c0-7.2,5.8-13,13-13h0.7c7.2,0,13,5.8,13,13v0C247.2,20.1,241.4,26,234.2,26z M215.9,95.4l-22.1-32.9l19.1-28.3 c1-1.5-0.1-3.4-1.8-3.4h-18.6c-0.7,0-1.4,0.4-1.8,1l-8.8,13.1l-8.2,12.2V4.8c0-1.2-1-2.2-2.2-2.2h-19.5c-1.2,0-2.2,1-2.2,2.2v91.9 c0,1.2,1,2.2,2.2,2.2h19.5c1.2,0,2.2-1,2.2-2.2V68l8.3,12.2l11.9,17.7c0.4,0.6,1.1,1,1.8,1h18.5C215.9,98.9,216.9,96.9,215.9,95.4z M118.5,30.7h19.4c1.2,0,2.2,1,2.2,2.2v63.7c0,1.2-1,2.2-2.2,2.2h-19.4c-1.2,0-2.2-1-2.2-2.2v-2c-4.8,4.4-10.6,6.2-16.8,6.2 c-19,0-34.3-15.4-34.3-36s15.3-36,34.3-36c6.2,0,12,1.9,16.8,6.2v-2.2C116.3,31.7,117.3,30.7,118.5,30.7z M116,64.5 c0-7.2-5.8-13-13-13c-7.2,0-13,5.8-13,13v0.7c0,7.2,5.8,13,13,13c7.2,0,13-5.8,13-13V64.5z M63.6,30.8H47.5v-15 c0-1.2-1-2.2-2.2-2.2h-8.6c-1.2,0-2.4,0.5-3.2,1.5l-18.8,22c-0.6,0.8-1,1.7-1,2.7v8.6c0,1.2,1,2.2,2.2,2.2h8.1v24.3 c0,15.7,10.4,26.1,23.1,26.1c7,0,11.5-0.9,15.1-2.5c1-0.4,1.5-1.5,1.2-2.6l-4.2-15.5c-0.4-1.3-1.7-1.9-3-1.5 c-0.9,0.4-2.1,0.7-3.7,0.7c-2.9,0-4.9-2-4.9-5.6V50.6h15.9c1.2,0,2.2-1,2.2-2.2V33C65.8,31.8,64.8,30.8,63.6,30.8z'
          fill={mainColor || '#FFFFFF'}
        />
        <path
          className='st1'
          d='M14,214.1h-0.7c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13H14c7.2,0,13,5.8,13,13v0 C26.9,208.2,21.1,214.1,14,214.1z'
          fill={dotColor || '#0000FF'}
        />
      </svg>
    </div>
  )
}

export default Logo
