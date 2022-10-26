import './App.css';
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Wizard from './pages/Wizard';

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
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Wizard />}/>
        </Routes>
  
    </div>
  );
}

export default App;
