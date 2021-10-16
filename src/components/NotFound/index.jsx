// Not found
import React from 'react';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>:( 404: Page not found</h1>
      <p>
        Go back
        {' '}
        <a href="/">
          home!
        </a>
      </p>
    </section>
  );
}
