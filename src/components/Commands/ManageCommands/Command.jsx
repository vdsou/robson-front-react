// Command: list properties of a command.
import React, { useContext, useEffect } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';
import ListingMenu from '../../ListingMenu';
import './Command.css';

export default function Command() {
  const { setShowRobsonStats } = useContext(LayoutContext);
  useEffect(() => {
    setShowRobsonStats(false);
  }, []);
  return (
    <>
      <ListingMenu />
      <section className="command-list">
        <h1>bomdia</h1>
        <form className="command-form">
          <label htmlFor="id">
            ID:
            <input type="text" value="605dfd9f57c687001fd29af0" id="id" />
          </label>
          <label htmlFor="command">
            Command:
            <input type="text" value="bomdia" id="command" />
          </label>
          <label htmlFor="return">
            Message return:
            <input type="text" value="Bom dia VC" id="return" />
          </label>
          <label htmlFor="count:">
            Count:
            <input type="text" value="" id="count:" />
          </label>
        </form>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </section>
    </>
  );
}
