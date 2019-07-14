import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Portfolio from "./Portfolio";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "./Footer";

import styled from 'styled-components'

function Root() {
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
  );
}

const Website = styled.div`
  padding: 30px 30px 0px;
`

export default Root;
