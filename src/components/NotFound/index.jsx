// Not found
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>:( 404: Page not found</h1>
      <p>
        Go back
        {' '}
        <Link to="/">
          home!
        </Link>
      </p>
    </section>
  );
}
