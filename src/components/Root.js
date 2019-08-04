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
  padding: 0rem 1.875rem;

  margin: 0 auto;
  max-width: 800px; /* temporary for mobile styles */
`

export default Root
