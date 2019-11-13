/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(buttonName){
this.setState( prev => calculate(prev, buttonName) );
}
  render() {
    return (
      <div className="main-container">
        <Header />
        <Display result={this.state.total}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const Header = () => (
  <div className="header">
    <h1>React Calculator</h1>
  </div>
);

export default App;
