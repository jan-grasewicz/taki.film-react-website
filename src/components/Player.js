import React, { useState, useEffect } from "react";
import PlayerCredits from "./PlayerCredits";

function Player({ portfolio }) {
  const [active, setActive] = useState({});
  const initialState = portfolio[3];

  useEffect(() => {
    setActive(initialState || {});
  }, [initialState]);

  const handleClick = (e, video) => {
    setActive(video);
  };

  return (
    <React.Fragment>
      <iframe
        src={active && active.url}
        width="640"
        height="320"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      <ul>
        {portfolio &&
          portfolio.map(video => (
            <li key={video.url}>
              <p
                onClick={e => handleClick(e, video)}
                style={{ color: active && video.url === active.url && "red" }}
              >
                {video.title}
              </p>
            </li>
          ))}
      </ul>
      <div>
        <div>
          <h2>{active && active.fullTitle}</h2>
          <p>{active && active.description}</p>
        </div>
        <PlayerCredits credits={active && active.credits} />
      </div>
    </React.Fragment>
  );
}

export default Player;
