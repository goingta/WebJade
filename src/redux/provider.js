import { Component } from "react";
import PropTypes from "prop-types";

export default class Provider extends Component {
  // 声明Context对象属性
  static childContextTypes = {
    store: PropTypes.object
  };
  // 返回Context对象
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}
