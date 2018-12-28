import React, { Component, Suspense } from 'react';
import './App.css';
import Typist from 'react-typist';
import SnowStorm from 'react-snowstorm';

class Main extends Component {
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
          <Suspense fallback={<div>Loading...</div>}>
            <img src="https://s3-eu-west-1.amazonaws.com/otix-bucket-s3/otix/img/logo-light.png" className="App-logo animated fadeIn" alt="logo" />
            <Typist className="animated fadeIn" cursor={cursor} startDelay={50}>
            <p>
              We want to wish you a Merry Christmas<br/>
              & Happy New Year!
            </p>
            </Typist>
          </Suspense>
        </header>
        <div>
        <SnowStorm excludeMobile={ false }/>
        </div>
      </div>
    );
  }
}

export default Main;
