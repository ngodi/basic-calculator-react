/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Button = ({ name, wide, color, clickHandler }) => (
  <div>
    <button className={wide ? 'wide' : 'btn'} style={{ background: color }} type="button" onClick={ clickHandler(name) }>{name}</button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
Button.defaultProps = { color: 'orange', wide: false };

export default Button;
