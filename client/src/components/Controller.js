import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as deckActions from "../actions/deckActions";
import * as controllerActions from "../actions/controllerActions";
import "../styles/controller.css";
const Controller = (props) => (
  <div className="hilo-button-group">
    <button
      className="animated-button"
      onClick={() =>
        props.guessHigher(props.deckId, props.card, props.faceUpPile)
      }
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      &#9757;Higer
    </button>
    <button
      className="animated-button7"
      onClick={() =>
        props.guessLower(props.deckId, props.card, props.faceUpPile)
      }
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      &#9759;Lower
    </button>
  </div>
);

const mapStateToProps = (state) => {
  // console.log('map to state to props, state.deckId: ', state);
  return {
    deckId: state.deck.id,
    card: state.deck.currentCard.value,
    faceUpPile: state.deck.faceUpPile,
    currentGuesses: state.game.currentGuesses,
  };
};

// console.log('passTurn', controllerActions.passTurn())

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...controllerActions, ...deckActions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
