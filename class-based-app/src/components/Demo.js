import React, { Component } from 'react'

export default class Demo extends Component {
  constructor() {
    super();
    this.salary = 1000;
    this.state = {
      count: 0,
      name: 'Abhishek',
      number: 100
    }
  }

  handleClick = ()=> {
    this.setState({count: this.count + 1});
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>increment</button>
        <h1>This is class based component {this.salary}</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <ul>
          {this.props.skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem</p>
      </div>
    )
  }
}
