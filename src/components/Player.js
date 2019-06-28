import React, { useState, useEffect } from "react";
import PlayerCredits from "./PlayerCredits";
import PlayerList from "./PlayerList";
import PlayerInfo from "./PlayerInfo";

function Player({ playlist }) {
  const [active, setActive] = useState({});
  const initialState = playlist[3];

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
      <PlayerList
        playlist={playlist}
        handleClick={handleClick}
        active={active}
      />
      <div>
        <PlayerInfo title={active.fullTitle} description={active.description} />
        <PlayerCredits credits={active.credits} />
      </div>
    </React.Fragment>
  );
}

export default Player;
