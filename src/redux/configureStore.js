import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducer";

const configureStore = (initalState) => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewarList = [thunk, reduxImmutableStateInvariant()];

  return createStore(
    rootReducer,
    initalState,
    composeEnhancer(applyMiddleware(...middlewarList))
  );
};

export default configureStore;
