// Success
import React from 'react';
import PropTypes from 'prop-types';
import './Success.css';

export default function Success({ msg }) {
  return (
    <div className="success-container" id="success-message">
      <h3>{msg}</h3>
    </div>
  );
}
Success.propTypes = {
  msg: PropTypes.string,
}.isRequired;
