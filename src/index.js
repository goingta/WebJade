import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./components/CounterWithConnect";
// import Counter from "./components/CounterWithoutMiddleware";
import Provider from "./redux/provider";
import * as serviceWorker from "./serviceWorker";
// import store from "./store/store";
import store from "./store/storeWithMiddleware";

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
