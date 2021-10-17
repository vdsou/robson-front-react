import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

export default function Error({ err }) {
  return (
    <div className="container" id="error-message">
      <h3>Something went wrong! Try again.</h3>
      <p>{`${err}`}</p>
    </div>
  );
}
Error.propTypes = {
  err: PropTypes.string,
}.isRequired;
