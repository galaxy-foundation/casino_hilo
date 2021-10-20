import { connect } from "react-redux";
import App from "./App";
import { bindActionCreators } from "redux";
import * as deckAction from "../actions/deckActions";

const mapStateToProps = (state) => {
  // console.log("map to state to props, state.deckId: ", state);
  return {
    deckId: state.deckId,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("map to dispatch to props");
  return {
    dispatch,
    ...bindActionCreators(deckAction, dispatch),
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
