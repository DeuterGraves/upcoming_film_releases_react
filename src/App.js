import React, { Component } from 'react';
import FilmBox from './containers/FilmBox.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Here come the moving pictures!</h1>
      <FilmBox />
      <h2>Click here for more</h2>
      </div>
    );
  }
}

export default App;
