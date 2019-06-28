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
  background-color: black;
  color: ${props=>props.theme.white};
`

export default Root;
