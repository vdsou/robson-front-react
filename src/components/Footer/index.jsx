// Footer
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <p>
          made with all ❤️ by
          {' '}
          <a href="https://github.com/vdsou" target="_blank" rel="noreferrer">
            vdsou
          </a>
        </p>
        <div className="credits">
          <a href="/">credits</a>
        </div>
      </div>
    </footer>
  );
}
