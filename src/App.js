import React, { Component } from 'react';
import './App.css';
import IdeaGenerator from './Ideagenerator.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://img00.deviantart.net/a7a8/i/2009/356/5/9/art__i_feel_inspired_by_shadowtuga.jpg"} className="Banner-image" alt="logo" />
        </header>
        <h1>Welcome to Artinspire!</h1>
        <IdeaGenerator />
      </div>
    );
  }
}

export default App;
