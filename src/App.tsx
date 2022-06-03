import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/ButtonComponent'
import { stringify } from 'querystring';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Button primary={true} label="Google Me Up" />
      </header>
    </div>
  );
}

export default App;
