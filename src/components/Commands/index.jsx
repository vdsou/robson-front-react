// Commands List
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint no-underscore-dangle: 0 */

import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/CommandsContext';
import { LayoutContext } from '../../context/LayoutContext';
import ListingMenu from '../ListingMenu';
import './CommandsList.css';

export default function CommandsList() {
  const {
    commandsList: { commands },
  } = useContext(Context);
  const { setShowRobsonStats } = useContext(LayoutContext);
  useEffect(() => {
    setShowRobsonStats(false);
  }, []);
  return (
    <>
      <ListingMenu />
      <section className="list-commands">
        <ul>
          {commands
          && commands.map((item) => (
            <li key={item._id}>
              <Link to={`/command/${item._id}`}>{item.command}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
