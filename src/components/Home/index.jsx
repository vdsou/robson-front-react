// Home
import React, { useEffect } from 'react';
import './Home.css';
import api from '../../services/api';

export default function Home() {
  useEffect(() => {
    api
      .get('/commands/get')
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="home">
      <h1>Welcome, User 🗣️</h1>
      <p>💻️ Here you can manage some commands I have in my database! 🚀️</p>
      Please, be careful! Things you are allowed to do:
      <ul>
        <li>
          <span className="flag-blue">Search for commands</span>
        </li>
        <li>
          <span className="flag-red">Insert new command</span>
        </li>
        <li>
          <span className="flag-red">Update a command</span>
        </li>
        <li>
          <span className="flag-red">Delete a command</span>
        </li>
      </ul>
      <h3>
        Any question? Contact
        {' '}
        <a href="mailto:vdsouza@outlook.com">
          vdsou
        </a>
      </h3>
    </section>
  );
}
