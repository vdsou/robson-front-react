// Success
import React from 'react';
import PropTypes from 'prop-types';
import './Success.css';

export default function Success({ msg, link }) {
  return (
    <div className="success-container" id="success-message">
      <h3>{msg}</h3>
      {link && (
        <p className="link">
          <a href="/commands">Go back to Commands</a>
        </p>
      )}
    </div>
  );
}
Success.propTypes = {
  msg: PropTypes.string,
}.isRequired;
