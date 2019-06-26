import React, { useState, useEffect } from "react";
import Player from "./Player";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(data => setPortfolio(data.portfolio))
//clean up todo
    return () => {};
  }, []);

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <Player portfolio={portfolio} />
    </section>
  );
}

export default Portfolio;
