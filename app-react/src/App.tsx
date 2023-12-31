import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sayHi, getDateTime } from 'library-rollup';
import { HelloWorld, Image } from 'library-vite';

console.log(getDateTime());
sayHi();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld text="123" />
        <Image alt="This is a picture" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
