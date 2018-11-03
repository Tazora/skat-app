import React, { Component } from 'react';
import AppContainer from './Layout/AppContainer.jsx';
import './App.css';

class App extends Component {

  state = {
      _id: "MeJZSDjHWbYHTSjPM",
      shortId: "eEHRy",
      playerA: "Seb",
      playerB: "Lukas",
      playerC: "Basti",
      pointsA: 72,
      pointsB: 0,
      pointsC: 72,
      declarer: "Lukas",
      declarerWins: false,
      jackClubs: false,
      jackSpades: false,
      jackHearts: false,
      jackDiamonds: false,
      correctBidding: true,
      gamemode: "clubs",
      hand: false,
      schneider: false,
      schneiderAnnounced: false,
      schwarz: false,
      schwarzAnnounced: false,
      ouvert: false,
      re: false,
      bock: false,
      additionalPointsA: 0,
      additionalPointsB: 0,
      additionalPointsC: 0,
      createdAt: {
          $date: "2018-06-09T18:56:10.834Z"
      },
      gameName: "Münsteraner Buben am 02.11.2018",
      gameId: "sjLJsQfLwsN7L6HBy",
      tournamentName: "Münsteraner Buben 2018",
      tournamentId: "FFkApcwXxm4Bsj9NA",
      DELETED: false
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppContainer props={this.state} />
        </header>
      </div>
    );
  }
}

export default App;
