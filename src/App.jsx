import './App.css';
import React, {useState} from 'react';
import project from './data/project'
import Display from './pages/Display';

function App() {

  // Ha backend szerverre feltennék egy .json fájlt, akkor így fetchelném
  const loadProjectTemplate = async () => {
    const response = await fetch('http://localhost:3000/data/project', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data); //useState-hez rendelném az eredményt, majd map-elném
  }


  return (
    <div className="App">
      {project.projektek.map((item, i) => (
              <Display item={item} key={i}/>
            ))}
    </div>
  );
}

export default App;
