import React, { Component } from 'react';
import AppBar from './Layout/AppBar.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar />
        </header>
      </div>
    );
  }
}

export default App;
