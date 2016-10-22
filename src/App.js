import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>PWA <sub>tips</sub></h2>
        </div>
        <div className="App__container">
        	<div className="App__card">
						<a href="https://pwa.tips/codelabs">Codelabs</a>
        	</div>
          <div className="App__card">
          	<a href="http://eepurl.com/clf6S5" target="_blank">PWA Tips</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
