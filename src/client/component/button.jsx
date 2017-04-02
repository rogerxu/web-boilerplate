import React, { PropTypes } from 'react';

const Button = ({ label, handleClick }) =>
  <button
    onClick={handleClick}
    className="btn btn-primary"
    type="button"
    role="button"
  >{label}</button>;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
