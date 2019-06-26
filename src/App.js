import React, { Component } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Introduction />
          <Portfolio />
          <AboutUs />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
