import React, { Component } from 'react';

export default class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count > 10 && prevState.count <= 10) {
      alert('bas bahut ho gya!');
      return false;
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
