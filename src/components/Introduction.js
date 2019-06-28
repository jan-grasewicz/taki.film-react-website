import React from "react";

function Introduction() {
  return (
    <section className="introduction">
      <h1>Cześć, tu taki.film</h1>
      <div className="showreel">
        <iframe
          src="https://player.vimeo.com/video/313798158"
          width="640"
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
  );
}

export default Introduction;
