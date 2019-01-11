import React, { Component } from "react";
// import { createStore } from "redux";
// import { createStore } from "../redux/redux";
// import reducer from "../reducers/todo";
import store from "../store/store";

// const store = createStore(reducer);

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ list: store.getState().todo.list });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleKeyDown(event) {
    if (event.keyCode === 13 && event.target.value.length > 0) {
      store.dispatch({ type: "add", item: event.target.value });
      event.target.value = "";
    }
  }

  handleDelete(index) {
    store.dispatch({ type: "remove", index: index });
  }

  render() {
    let htmlString = this.state.list.map((todo, index) => (
      <li key={index}>
        {todo}
        <button onClick={this.handleDelete.bind(this, index)}>-</button>
      </li>
    ));
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown.bind(this)} />
        <ul>{htmlString}</ul>
      </div>
    );
  }
}
