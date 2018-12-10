import React, { Component } from 'react';
import FilmBox from './containers/FilmBox.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Here come the moving pictures!</h1>
      <hr />
      <FilmBox />
      <hr />
      <h3><a href="https://www.imdb.com/calendar/?region=gb">Click here for more</a></h3>
      </div>
    );
  }
}

export default App;
