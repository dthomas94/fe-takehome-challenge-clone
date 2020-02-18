import React from 'react';
import logo from './Shared/assets/logo.svg';
import './App.css';
// import {
// getYears,
// getModelsByMakeYear,
// getBodyStylesByModelYearMake,
// getMakesByYear,
// getVehicle,
// } from './Services/vehicle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ready. Set. Build.</p>
        <p>
          <code>App.js</code> is where you can start!
        </p>
      </header>
    </div>
  );
}

export default App;
