import React, { Component } from "react";
import PropTypes from "prop-types";

const connect = (mapStateToProps, mapDispatchToProps) => _component => {
  class Proxy extends Component {
    // 声明需要使用的Context属性
    static contextTypes = {
      store: PropTypes.object
    };

    constructor(props) {
      super(props);
      this.state = {};
    }

    componentWillMount() {
      const { store } = this.context;
      this.unsubscribe = store.subscribe(() => {
        let state = mapStateToProps(store.getState());
        this.setState(state);
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const { store } = this.context;
      return (
        <_component {...this.state} {...mapDispatchToProps(store.dispatch)} />
      );
    }
  }
  return Proxy;
};

export default connect;
