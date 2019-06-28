import React from "react";

function PlayerCredits({ credits: { cameraMan, lights, sound, editor } }) {
  return (
    <ul>
      <li>camera man: {cameraMan}</li>
      <li>lights: {lights}</li>
      <li>sound: {sound}</li>
      <li>editor: {editor}</li>
    </ul>
  );
}

PlayerCredits.defaultProps = {
  credits: {}
};

export default PlayerCredits;
