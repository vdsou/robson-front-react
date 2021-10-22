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
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/vdsou/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/vdsou01"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://github.com/vdsou"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="credits">
          <h1>Credits</h1>
          <p>
            {'Icons made by '}
            <a
              href="https://www.flaticon.com/br/autores/smashicons"
              rel="noreferrer"
              target="_blank"
              title="Smashicons"
            >
              Smashicons
            </a>
            {' from '}
            <a
              href="https://www.flaticon.com/br/"
              rel="noreferrer"
              target="_blank"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
          <p>
            {'Icons made by '}
            <a
              href="https://www.freepik.com"
              rel="noreferrer"
              target="_blank"
              title="Freepik"
            >
              Freepik
            </a>
            {' from '}
            <a
              href="https://www.flaticon.com/"
              rel="noreferrer"
              target="_blank"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
          <p>
            {'Icons made by '}
            <a
              href="https://fontawesome.com/"
              rel="noreferrer"
              target="_blank"
              title="Font Awesome"
            >
              Font Awesome
            </a>
            {' from '}
            <a
              href="https://fontawesome.com/"
              rel="noreferrer"
              target="_blank"
              title="Font Awesome"
            >
              www.fontawesome.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
