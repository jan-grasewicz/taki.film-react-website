import React from "react";

function PlayerCredits({ credits }) {
  return (
    <ul>
      <li>camera man: {credits && credits.cameraMan}</li>
      <li>lights: {credits && credits.lights}</li>
      <li>sound: {credits && credits.sound}</li>
      <li>editor: {credits && credits.editor}</li>
    </ul>
  );
}

export default PlayerCredits;
