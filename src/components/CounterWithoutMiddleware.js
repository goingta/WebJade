import React, { Component } from "react";
import connect from "../redux/connect";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

class Counter extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{num}</h1>
        <p className="text-center">
          <button
            onClick={this.props.increase}
            className="btn btn-primary mr-2"
          >
            Increase
          </button>
          <button onClick={this.props.decrease} className="btn btn-danger my-2">
            Decrease
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    num: state.counter.num
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // increase: () => dispatch({ type: INCREMENT, amount: 3 }),
    // decrease: () => dispatch({ type: DECREMENT, amount: 2 })
    increase: () => logger(dispatch, { type: INCREMENT, amount: 3 }),
    decrease: () => logger(dispatch, { type: DECREMENT, amount: 2 })
  };
};

// 这种拿不到store，而且只能在各个业务逻辑里面做
const logger = (dispatch, action) => {
  console.log("before action", action);
  dispatch(action);
  console.log("after action", action);
};

const counterWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default counterWithConnect;
