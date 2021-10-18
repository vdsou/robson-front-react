// Home
import React, { useContext } from 'react';

import { Context } from '../../context/CommandsContext';

import './Home.css';

export default function Home() {
  const { commandsList } = useContext(Context);
  console.log('commandsList', commandsList);
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
        <a href="mailto:vdsouza@outlook.com"> vdsou</a>
      </h3>
    </section>
  );
}
