import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from "./actions/actionCreators";

import logo from "./logo.svg";
import "./App.css";

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class Container extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button
          onClick={() => {
            this.props.testAction();
          }}
        >
          Test Dispatcher
        </button>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container);

export default App;
