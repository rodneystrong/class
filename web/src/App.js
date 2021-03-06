import React, { Component } from 'react';
import Blog from './blog';
import Delayed from './delayed';
import RenderArray from './render-array';
import Header from './header';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Delayed />
        <RenderArray />

        <Blog />
        <Blog />
      </div>
    );
  }
}

export default App;
