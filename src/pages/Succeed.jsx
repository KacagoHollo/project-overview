import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from 'react-router-dom';

function Succeed() {
  const navigate = useNavigate();
  const nav = (path) => {
      console.log('rerouting');
      navigate(path);
  }

  setTimeout(() => {
    nav('/')
  }, 2000);
  return (
    <div>
        <h1>Sikeres feltöltés!</h1>
        <ProgressBar completed={100} />
    </div>
  )
}

export default Succeed