/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import './App.css';


export default class ButtonPanel extends React.Component {
  constructor(props){
    super(props);
    Button.propTypes = {
    clickHandler: PropTypes.func,
  };
  }
  

  handleClick(buttonName){
    this.props.clickHandler(buttonName);
  }
  render() {
    return (
  <div className="calculator">
    <div className="row">
      <Button name="AC" color='lightgray' clickHandler= {this.handleClick } />
      <Button name="+/-" color='lightgray' clickHandler= {this.handleClick } />
      <Button name="%" color='lightgray' clickHandler= {this.handleClick } />
      <Button name="÷" clickHandler= {this.handleClick } />
    </div>
    <div className="row">
      <Button name="7" color='lightgray' clickHandler= {this.handleClick } />
      <Button name="8" color='lightgray' clickHandler= {this.handleClick } />
      <Button name="9" color='lightgray' clickHandler= {this.handleClick } />
      <Button name="x" clickHandler= {this.handleClick } />
    </div>
    <div className="row">
      <Button name="4" color='lightgray' clickHandler= { this.handleClick } />
      <Button name="5" color='lightgray' clickHandler = { this.handleClick } />
      <Button name="6" color='lightgray' clickHandler = { this.handleClick } />
      <Button name="-" clickHandler= {this.handleClick } />
    </div>
    <div className="row">
      <Button name="1" color='lightgray' clickHandler= {this.handleClick } />
      <Button name="2" color='lightgray' clickHandler= {this.handleClick } />
      <Button name="3" color='lightgray' clickHandler= {this.handleClick } />
      <Button name="+" clickHandler= {this.handleClick } />
    </div>
    <div className="row">
      <Button name="0" color='lightgray' wide clickHandler= {this.handleClick } />
      <Button name="." color='lightgray' clickHandler= {this.handleClick } />
      <Button name="=" clickHandler= {this.handleClick } />
    </div>
  </div>
    );
}
}
