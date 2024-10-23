import React, { Component } from 'react';

export default class Task extends Component {
  constructor() {
    super();
    this.state = {
      name: 'My name is Abhishek',
      condition: true
    }
  }

  handleClick = () => {
    this.setState({ condition: !this.state.condition });
  }

  render() {
    return (
      <div>
        {this.state.condition && <h1>{this.state.name}</h1>}
        <button className='btn btn-success' onClick={this.handleClick}>{this.state.condition ? 'hide' : 'show'}</button>
      </div>
    )
  }
}
