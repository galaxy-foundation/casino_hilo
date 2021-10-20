const DEFAULT_STATE = {
  id: "",
  currentCard: {},
  previousCard: {},
  faceUpPile: [],
};

const newDeck = (state, id) => {
  let newState = Object.assign({}, DEFAULT_STATE);
  newState.id = id;
  return newState;
};

const drawCard = (state, card) => {
  let newState = Object.assign({}, state);
  newState.previousCard = state.currentCard;
  newState.currentCard = {};
  newState.currentCard.value = card.value;
  newState.currentCard.image = card.image;
  newState.faceUpPile = [...state.faceUpPile, card.value];
  return newState;
};

const clearFaceUpStack = (state, card) => {
  let newState = Object.assign({}, state);
  newState.faceUpPile = [card.value];
  return newState;
};

const deckReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return newDeck(state, action.deckId);
    case "DRAW_CARD":
      return drawCard(state, action.card);
    case "INCORRECT_GUESS":
      return clearFaceUpStack(state, action.newCard);
    default:
      return state;
  }
};

export default deckReducer;
