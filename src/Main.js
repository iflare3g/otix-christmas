import React, { Component, Suspense, lazy } from 'react';
import './App.css';
const CountDown = lazy(() => import('./components/Countdown.js'));

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Suspense fallback={<div>Loading...</div>}>
            <img src="https://s3-eu-west-1.amazonaws.com/otix-bucket-s3/otix/img/logo-light.png" className="App-logo animated fadeIn" alt="logo" />
            <p ref="text">Waiting for NYE</p>
            <CountDown/>
          </Suspense>
        </header>
      </div>
    );
  }
}

export default Main;
