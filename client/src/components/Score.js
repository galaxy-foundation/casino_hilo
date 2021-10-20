import React from "react";
import { connect } from "react-redux";
import "../styles/Score.css";
import { bindActionCreators } from "redux";
import "../styles/font.css";

const Score = (props) => (
  <div className="group-goal">
    <div>
      Correct Guesses: <span>{props.correctGuesses}</span>
    </div>
    <div>
      Total: <span>{props.player1}</span>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    player1: state.game.scores[0],
    currentPlayer: state.game.currentPlayer + 1,
    correctGuesses: state.game.correctGuesses,
    faceUpPileCount: state.deck.faceUpPile.length,
  };
};

export default connect(mapStateToProps)(Score);
