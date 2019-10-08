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
  max-width: 1920px;

  padding: 0rem ${({ theme }) => theme.mainPadding.small};
  ${({ theme }) => theme.media.tablet`
      padding: 0rem ${theme.mainPadding.medium};  
    `}
  ${({ theme }) => theme.media.desktop`
      padding: 0rem ${theme.mainPadding.large};  
    `}
`

export default Root
