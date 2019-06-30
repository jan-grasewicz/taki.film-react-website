import React from "react"
import styled from "styled-components"

function Introduction() {
  return (
    <section className="introduction">
      <Title>
        Cześć,
        <br /> tu taki.film
      </Title>
      <div className="showreel">
        <iframe
          src="https://player.vimeo.com/video/313798158"
          max-width="640"
          height="320"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
      <h3>taki.film czyli jaki?</h3>
      <p>
        Taki który przyciąga uwagę, zapada w pamięć i wyróżnia się jakością.
      </p>
      <button>NAPISZ DO NAS</button>
    </section>
  )
}

const Title = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  font-weight: 800;
  line-height: 2.9444rem;
  padding: 2.5rem 0rem 1.3333rem;
`

export default Introduction
