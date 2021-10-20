const DEFAULT_STATE = {
  currentPlayer: 0,
  correctGuesses: 0,
  scores: { 0: 0, 1: 0 },
};

const getScores = (oldScores, player, points) => {
  let scores = Object.assign({}, oldScores);
  scores[player] = oldScores[player] + points;
  return scores;
};

const incorrectGuess = (state, points) => {
  let newState = Object.assign({}, state);
  newState.scores = getScores(state.scores, state.currentPlayer, points);
  newState.correctGuesses = 0;
  return newState;
};

const correctGuess = (state) => {
  let newState = Object.assign({}, state);
  newState.correctGuesses = state.correctGuesses + 1;
  return newState;
};

const gameReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return DEFAULT_STATE;
    case "INCORRECT_GUESS":
      return incorrectGuess(state, action.points);
    case "CORRECT_GUESS":
      return correctGuess(state);
    default:
      return state;
  }
};

export default gameReducer;
