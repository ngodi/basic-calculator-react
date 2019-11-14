/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: null,
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick = (buttonName) => {
    let data = calculate(this.state, buttonName);
    this.setState({
      total: data.total,
      next: data.next,
      operation: data.operation
    })
  };

  render() {
    return (
      <div className="main-container">
      <h1>React Calculator</h1>
        <Display result={ this.state.total || this.state.next || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
