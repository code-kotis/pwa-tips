import React, { Component } from 'react';
import './App.css';

class App extends Component {

  openSignup() {
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us11.list-manage.com","uuid":"7882ec66041fdf12fb314f2fc","lid":"b820ab6def"}) })
  }

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
