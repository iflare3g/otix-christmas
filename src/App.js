import React, { Component } from 'react';
import './App.css';
import Typist from 'react-typist';
import SnowStorm from 'react-snowstorm';

class App extends Component {
  render() {
    const cursor = {
      show: false,
      blink: true,
      element: '|',
      hideWhenDone: false,
      hideWhenDoneDelay: 1000,
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src="http://otix.it/images/logo.png" className="App-logo animated fadeIn" alt="logo" />
          <Typist className="animated fadeIn" cursor={cursor} startDelay={50}>
          <p>
            We want to wish you a Merry Christmas<br/>
            & Happy New Year!
          </p>
          </Typist>
        </header>
        <div>
        <SnowStorm excludeMobile={ false }/>
        </div>
      </div>
    );
  }
}

export default App;
