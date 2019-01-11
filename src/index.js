import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Todo from "./components/Todo";
import * as serviceWorker from "./serviceWorker";

// let ele = (
//   <h1>
//     hello<span>word</span>
//   </h1>
// );
// console.log(ele);

// let eleObj1 = {
//   type: "h1",
//   props: {
//     children: [
//       "hello",
//       {
//         type: "span",
//         props: {
//           children: ["word"],
//           className: "blue"
//         }
//       }
//     ],
//     className: "red"
//   }
// };

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
