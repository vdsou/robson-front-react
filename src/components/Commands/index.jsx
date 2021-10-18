// Commands List
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/CommandsContext';
import { LayoutContext } from '../../context/LayoutContext';
import './CommandsList.css';

export default function CommandsList() {
  const {
    commandsList: { commands },
  } = useContext(Context);
  // console.log('commandsList', commandsList);
  const { setShowRobsonStats } = useContext(LayoutContext);
  useEffect(() => {
    setShowRobsonStats(false);
  }, []);
  return (
    <section className="list-commands">
      <ul>
        {commands && commands.map((item) => (
          // eslint-disable-next-line no-param-reassign, no-underscore-dangle
          <li key={item._id}>
            <a href="#">{item.command}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
