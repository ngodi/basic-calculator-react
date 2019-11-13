import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };
static defaultProps = { color: 'orange', wide: false };
  
handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

render() {
return (
   <div>
    <button onClick={this.handleClick }  className={this.props.wide ? 'wide' : 'btn'} style={{ background: this.props.color }} type="button">{this.props.name}</button>
  </div>
 );
 }
};



