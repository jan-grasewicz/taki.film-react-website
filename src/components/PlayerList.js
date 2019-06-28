import React from "react";

function PlayerList({playlist, handleClick, active}) {
  return (
    <ul>
      {playlist &&
        playlist.map(video => (
          <li key={video.url}>
            <p
              onClick={e => handleClick(e, video)}
              style={{ color: video.url === active.url && "red" }}
            >
              {video.title}
            </p>
          </li>
        ))}
    </ul>
  );
}

export default PlayerList;
