// About
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-me">
        <h1>About</h1>
        <p>Developed by: Valdir Souza</p>
        <div className="social">
          <a
            href="https://www.instagram.com/vdsou/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/vdsou/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/vdsou01"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/vdsou" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="credits">
          <h1>Credits</h1>
          <p>
            {'Icons made by '}
            <a
              href="https://www.flaticon.com/br/autores/smashicons"
              title="Smashicons"
            >
              Smashicons
            </a>
            {' from '}
            <a href="https://www.flaticon.com/br/" title="Flaticon">
              www.flaticon.com
            </a>
          </p>
          <p>
            {'Icons made by '}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>
            {' from '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </p>
          <p>
            {'Icons made by '}
            <a href="https://fontawesome.com/" title="Font Awesome">
              Font Awesome
            </a>
            {' from '}
            <a href="https://fontawesome.com/" title="Font Awesome">
              www.fontawesome.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
