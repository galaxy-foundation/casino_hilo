import React, { Component } from "react";
import "../styles/App.css";
import Deck from "./Deck";
import Controller from "./Controller";
import Score from "./Score";
import { newGame } from "../actions/deckActions";
import AppFoot from "./footer";
import Bet from "./Bet";
class App extends Component {
  componentDidMount() {
    // console.log('props', this.props)
    this.props.dispatch(newGame());
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Bet />
        </div>
        <div className="back-image">
          <div className="App-container">
            <Deck />
            <Score />
            <Controller />
          </div>
        </div>
        <div className="back-image1"></div>
        <div className="back-image2"></div>
        <div className="back-image3"></div>
        <AppFoot />
      </div>
    );
  }
}
export default App;
