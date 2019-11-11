import React from 'react';
import './App.css';
import Display from './Display';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Display result="0" />
        <Button name="1" />
      </div>
    );
  }
}

const Header = () => (
  <div className="header">
    <h1>React Calculator</h1>
  </div>
);

export default App;
