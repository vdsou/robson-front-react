// Footer
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <p>
          {'made with all '}
          <i>
            <FontAwesomeIcon icon={faHeart} />
          </i>
          {' by '}
          <a href="https://github.com/vdsou" target="_blank" rel="noreferrer">
            vdsou
          </a>
        </p>
        <div className="credits">
          <a href="/about">credits</a>
        </div>
      </div>
    </footer>
  );
}
