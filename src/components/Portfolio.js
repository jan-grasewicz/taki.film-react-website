import React, { useContext } from "react"
import { SiteContext } from "../contexts/SiteContext"
import Player from "./Player/Player"

function Portfolio() {
  const { portfolio } = useContext(SiteContext)
  return (
    <section className="portfolio">
      <Player playlist={portfolio} />
    </section>
  )
}

export default Portfolio
