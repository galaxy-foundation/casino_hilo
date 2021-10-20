import { combineReducers } from "redux";

import deckReducer from "./deckReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  deck: deckReducer,
  game: gameReducer,
});

export default rootReducer;
