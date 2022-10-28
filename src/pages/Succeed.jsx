import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

function Succeed() {
  return (
    <div>
        <h1>Sikeres feltöltés!</h1>
        <ProgressBar completed={100} />
    </div>
  )
}

export default Succeed