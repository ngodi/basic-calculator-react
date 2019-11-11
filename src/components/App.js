import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Display result="result" />
        <ButtonPanel />
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
