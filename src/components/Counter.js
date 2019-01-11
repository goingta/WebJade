import React, { Component } from "react";
// import { createStore } from "redux";
import { createStore } from "../redux/redux";
import reducer from "../reducers/counter";

const store = createStore(reducer);

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        num: store.getState().num
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.state.num}</h1>
        <p className="text-center">
          <button
            onClick={() => {
              store.dispatch({ type: INCREMENT, amount: 3 });
            }}
            className="btn btn-primary mr-2"
          >
            Increase
          </button>
          <button
            onClick={() => {
              store.dispatch({ type: DECREMENT, amount: 2 });
            }}
            className="btn btn-danger my-2"
          >
            Decrease
          </button>
        </p>
      </div>
    );
  }
}

export default Counter;
