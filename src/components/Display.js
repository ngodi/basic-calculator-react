/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Display = (props) => (

  <div className="result">{ props.result }</div>

);

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };

export default Display;
