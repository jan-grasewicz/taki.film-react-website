import React, { Component } from "react";
import "./App.css";
import Player from "./components/Player";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>
            taki
            <br />
            .film
          </h2>
          <address>hej@taki.film</address>
          <a>KONTAKT</a>
        </header>
        <main>
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
              <p>Showreel</p>
            </div>
            <h3>taki.film czyli jaki?</h3>
            <p>
              Taki który przyciąga uwagę, zapada w pamięć i wyróżnia się
              jakością.
            </p>
            <button>NAPISZ DO NAS</button>
          </section>
          <section className="portfolio">
            <h2>Portfolio</h2>
            <Player />
          </section>
          <section className="aboutUs">
            {/* mini carousel */}
            <h3>mini-carousel</h3>
            <img
              src={process.env.PUBLIC_URL + "/img/Miniatura1.jpg"}
              alt={"taki.film at work"}
            />
            <h3>Kim jesteśmy?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              earum! Iure provident consequatur maxime, nesciunt, molestiae
              velit repellat delectus, debitis natus voluptas laborum nisi
              numquam fugit illum sapiente ad suscipit.
            </p>
          </section>
          <section className="contact">
            <h2>taki.film</h2>
            <p>
              Nasz zespół składa się z freelancerów.
              <br />
              Filmowców, animatorów, dżwiękowców, grafików, fotografów,
              producentów którzy są dobierani według potrzeb projektu.
            </p>
            <p>Odpowiedni ludzie do danego projektu to podstawa.</p>
            <address>
              <button>+48 792 211 609</button>
              <button>hej@taki.film</button>
            </address>
          </section>
        </main>
        <footer>
          <a>facebook</a>
          <a>instagram</a>
          <a>taki.film 2019</a>
        </footer>
      </div>
    );
  }
}

export default App;
