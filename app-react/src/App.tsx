import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sayHi } from 'library-rollup';

// console.log(getDateTime());
// setDocumentTitle('123123');
sayHi();
// sum(1, 2);

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
