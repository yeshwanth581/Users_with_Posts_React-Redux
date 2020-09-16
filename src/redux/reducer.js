import { combineReducers } from "redux";

import userReducer from "./users/reducer";

const rootReducer = combineReducers({
  userComponent: userReducer
});

export default rootReducer;
