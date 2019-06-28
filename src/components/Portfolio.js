import React, { useState, useEffect } from "react";
import Player from "./Player";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(data => setPortfolio(data.portfolio));
    //clean up and error handle todo
    return () => {};
  }, []);

  return (
    <section className="portfolio">
      <Player portfolio={portfolio} />
    </section>
  );
}

export default Portfolio;
