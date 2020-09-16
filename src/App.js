import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Users from "./users/Users";

export default function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happened!</h2>
        <Users />
      </div>
    </Provider>
  );
}
