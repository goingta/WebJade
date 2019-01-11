import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Todo from "./components/Todo";
import * as serviceWorker from "./serviceWorker";

let ele = (
  <h1>
    hello<span>word</span>
  </h1>
);
console.log(ele);

let eleObj1 = {
  type: "h1",
  props: {
    children: [
      "hello",
      {
        type: "span",
        props: {
          children: ["word"],
          className: "blue"
        }
      }
    ],
    className: "red"
  }
};

function render(eleObj, container) {
  let { type, props } = eleObj;
  let ele = document.createElement(type);
  for (let item in props) {
    if (item === "children") {
      props[item].forEach(element => {
        if (typeof element === "string") {
          let cele = document.createTextNode(element);
          ele.appendChild(cele);
        } else {
          render(element, ele);
        }
      });
    } else if (item === "className") {
      ele.setAttribute("class", props[item]);
    } else {
      ele.setAttribute(item, props[item]);
    }
  }
  container.appendChild(ele);
}

// ReactDOM.render(<Todo />, document.getElementById("root"));
render(eleObj1, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
