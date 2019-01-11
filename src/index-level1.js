import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import reducer from "./reducers/counter";

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <App
      onIncrement={() => store.dispatch({ type: "INCREMENT", amount: 3 })}
      onDecrement={() => store.dispatch({ type: "DECREMENT", amount: 2 })}
      value={store.getState()}
    />,
    document.getElementById("root")
  );
};

render();

let unSubscribe = store.subscribe(render);
setTimeout(() => {
  unSubscribe();
}, 5000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
