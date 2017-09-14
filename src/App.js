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
  onFormSubmit = evt => {
    const name = this.refs.name.value;
    this.props.testAction(name);
    this.refs.name.value = "";
    evt.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <h3>On global state</h3>
          {this.props.state.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
        <div className="form">
          <form onSubmit={this.onFormSubmit}>
            <input placeholder="Name" ref="name" />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container);

export default App;
