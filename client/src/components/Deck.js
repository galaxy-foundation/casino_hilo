import React from "react";
import { connect } from "react-redux";
import "../styles/Deck.css";
const Deck = (props) => <img src={props.card.image} className="cardimg" />;
const mapStateToProps = (state) => {
  return {
    deckId: state.deck.id,
    card: state.deck.currentCard,
  };
};

export default connect(mapStateToProps)(Deck);
