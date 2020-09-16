import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducer";

const configureStore = (initalState) => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewareList = [thunk, reduxImmutableStateInvariant()];

  return createStore(
    rootReducer,
    initalState,
    composeEnhancer(applyMiddleware(...middlewareList))
  );
};

export default configureStore;
