import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import logo from './logo.svg';
import './App.css';

function InteractiveBox({ title, content }) {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div
      className="interactive-box"
      onClick={toggleInfo}
      style={{
        cursor: 'pointer',
        backgroundColor: showInfo ? 'lightgray' : 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '10px',
        width: '70%',
        height: '70vh',
        margin: '0 auto',
        fontSize: '24px',
      }}
    >
      <h2>{title}</h2>
      {showInfo && <p>{content}</p>}
    </div>
  );
}

function App() {
  return (
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={0.5} style={{ backgroundColor: 'lightblue' }} />
      <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: 'lightcoral' }} />
      <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: 'lightgreen' }} />

      <ParallaxLayer offset={0} speed={0.2}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to My Interactive Website</h1>
            <p>Edit <code>src/App.js</code> and save to reload.</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2}>
        <InteractiveBox title="Box 1" content="Click me for more information about Box 1" />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.2}>
        <InteractiveBox title="Box 2" content="Click me for more information about Box 2" />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;