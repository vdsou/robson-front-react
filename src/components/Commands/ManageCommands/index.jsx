// Manage Commands
/* eslint no-underscore-dangle: 0 */
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../../context/CommandsContext';
import { LayoutContext } from '../../../context/LayoutContext';

import ListingMenu from '../../ListingMenu';
import './ManageCommands.css';

export default function ManageCommands() {
  const [result, setResult] = useState({});
  const { setShowRobsonStats } = useContext(LayoutContext);
  const { commandsList } = useContext(Context);
  const { commands } = commandsList;
  useEffect(() => {
    setShowRobsonStats(false);
  }, []);
  const handleSearch = (event) => {
    if (commands) {
      const searchResult = commands.filter(
        (item) => item.command === event.target.value,
      );
      if (searchResult) {
        setResult(searchResult);
      }
    }
  };
  return (
    <>
      <ListingMenu />
      <section className="manage-commands">
        <div className="manage-commands-search">
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            type="search"
            placeholder="Search here"
            className="manage-commands-search-box"
            onChange={handleSearch}
          />
          {result.length > 0 ? (
            <div className="manage-commands-result">
              {Object.entries(...result).map((item) => (
                <p key={Math.random() * 99999}>{`${item[0]}: ${item[1]}`}</p>
              ))}
              <div className="manage-commands-buttons">
                <a href={`/command/${result[0]._id}`}>Edit</a>
                <a href="/">Delete</a>
              </div>
            </div>
          ) : (
            <div className="manage-commands-result not-found">
              Nothing found! :(
            </div>
          )}
          <a href="/commands/insert-command" className="insert-button">
            <span>Insert a new command</span>
            <FontAwesomeIcon icon={faPlusSquare} />
          </a>
        </div>
      </section>
    </>
  );
}
