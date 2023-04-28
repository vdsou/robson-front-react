// Success
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Success.css';

export default function Success({ msg, link }) {
  return (
    <div className="success-container" id="success-message">
      <h3>{msg}</h3>
      {link && (
        <p className="link">
          <Link to="/commands">Go back to Commands</Link>
        </p>
      )}
    </div>
  );
}
Success.propTypes = {
  msg: PropTypes.string,
}.isRequired;
