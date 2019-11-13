/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';
import './App.css';

const ButtonPanel = ( clickHandler ) => (
  <div className="calculator">
    <div className="row">
      <Button name="AC" color clickHandler={ clickHandler }/>
      <Button name="+/-" color clickHandler={ clickHandler }/>
      <Button name="%" color clickHandler={ clickHandler }/>
      <Button name="÷" clickHandler={ clickHandler }/>
    </div>
    <div className="row">
      <Button name="7" color clickHandler={ clickHandler }/>
      <Button name="8" color clickHandler={ clickHandler }/>
      <Button name="9" color clickHandler={ clickHandler }/>
      <Button name="X" clickHandler={ clickHandler }/>
    </div>
    <div className="row">
      <Button name="4" color clickHandler={ clickHandler }/>
      <Button name="5" color clickHandler={ clickHandler }/>
      <Button name="6" color clickHandler={ clickHandler }/>
      <Button name="-" clickHandler={ clickHandler }/>
    </div>
    <div className="row">
      <Button name="1" color clickHandler={ clickHandler }/>
      <Button name="2" color clickHandler={ clickHandler }/>
      <Button name="3" color clickHandler={ clickHandler }/>
      <Button name="+" clickHandler={ clickHandler }/>
    </div>
    <div className="row">
      <Button name="0" color wide clickHandler={ clickHandler }/>
      <Button name="." color clickHandler={ clickHandler }/>
      <Button name="=" clickHandler={ clickHandler }/>
    </div>
  </div>
);
export default ButtonPanel;
