import React from 'react'
import Header from './Header'
import Introduction from './Introduction'
import Portfolio from './Portfolio'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Footer from './Footer'

import styled from 'styled-components'

const Root = () => {
  return (
    <Website>
      <Header />
      <main>
        <Introduction />
        <Portfolio />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </Website>
  )
}

const Website = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 900px; /* temporary for mobile styles */

  padding: 0rem ${props => props.theme.mainPadding.small};
  ${props => props.theme.media.tablet`
      padding: 0rem ${props => props.theme.mainPadding.medium};  
    `}
  ${props => props.theme.media.desktop`
      padding: 0rem ${props => props.theme.mainPadding.large};  
    `}
`

export default Root
