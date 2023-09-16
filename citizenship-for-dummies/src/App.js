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
    <Parallax pages={15}>
      <ParallaxLayer offset={0} speed={0.5} style={{ backgroundColor: 'lightblue' }} />
      <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: 'lightcoral' }} />
      <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: 'lightgreen' }} />
      <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: 'lightblue' }} />
      <ParallaxLayer offset={4} speed={0.5} style={{ backgroundColor: 'lightcoral' }} />
      <ParallaxLayer offset={5} speed={0.5} style={{ backgroundColor: 'lightgreen' }} />
      <ParallaxLayer offset={6} speed={0.5} style={{ backgroundColor: 'lightblue' }} />
      <ParallaxLayer offset={7} speed={0.5} style={{ backgroundColor: 'lightcoral' }} />
      <ParallaxLayer offset={8} speed={0.5} style={{ backgroundColor: 'lightgreen' }} />
      <ParallaxLayer offset={9} speed={0.5} style={{ backgroundColor: 'lightblue' }} />
      <ParallaxLayer offset={10} speed={0.5} style={{ backgroundColor: 'lightcoral' }} />
      <ParallaxLayer offset={11} speed={0.5} style={{ backgroundColor: 'lightgreen' }} />
      <ParallaxLayer offset={12} speed={0.5} style={{ backgroundColor: 'lightblue' }} />
      <ParallaxLayer offset={13} speed={0.5} style={{ backgroundColor: 'lightcoral' }} />
      <ParallaxLayer offset={14} speed={0.5} style={{ backgroundColor: 'lightgreen' }} />


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
        <InteractiveBox 
        title="How To Get A Visa" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.2}>
        <InteractiveBox title="How To Deal With The Visa You Are Given" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.2}>
        <InteractiveBox title="Important Alerts And Deadline" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.2}>
        <InteractiveBox title="How To Obtain Important Medical Records" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0.2}>
        <InteractiveBox title="How To Obtain Important Financial Records" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={6} speed={0.2}>
        <InteractiveBox title="Total Fees" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={7} speed={0.2}>
        <InteractiveBox title="How To Obtain A Driver's Liscense" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={8} speed={0.2}>
        <InteractiveBox title="How to Obtain A Bank Account" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={9} speed={0.2}>
        <InteractiveBox title="How To Apply For Housing" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={10} speed={0.2}>
        <InteractiveBox title="How To Work in America" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={11} speed={0.2}>
        <InteractiveBox title="How To Get Sponsors" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={12} speed={0.2}>
        <InteractiveBox title="Where to Apply" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={13} speed={0.2}>
        <InteractiveBox title="Winning the Visa Lottery" content="" />
      </ParallaxLayer>

      <ParallaxLayer offset={14} speed={0.2}>
    <div className="App">
      <InteractiveBox title="Winning the Visa Lottery" content="" />
      
      {/* Add your image here */}
      <img src="your-image-path.jpg" alt="Your Image" />
    </div>
  </ParallaxLayer>

    </Parallax>
  );
}

export default App;