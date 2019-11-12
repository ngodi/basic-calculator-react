import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Button = ({ name, wide, color }) => (
  <div>
    <button className={wide ? 'wide' : 'btn'} style={{ background: color }} type="button">{name}</button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
Button.defaultProps = { color: 'orange', wide: false };

export default Button;
