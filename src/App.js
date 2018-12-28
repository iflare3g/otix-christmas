import React, { Component, Suspense, lazy } from 'react';
import './App.css';

const Main = lazy(() => import('./Main.js'));

class App extends Component {
  render() {
    return (
      <Suspense fallback = {<div>Loading...</div>}>
        <Main/>
      </Suspense>
    );
  }
}

export default App;
