// Insert a command
import React, { useContext, useEffect } from 'react';
import { LayoutContext } from '../../../../context/LayoutContext';
import ListingMenu from '../../../ListingMenu';
import './InsertCommand.css';

export default function InsertCommad() {
  const { setShowRobsonStats } = useContext(LayoutContext);
  useEffect(() => {
    setShowRobsonStats(false);

    /* command: { type: String, required: true },
    image: String,
    cmdReturn: String,
    count: Number,
    audioYt: String, */
  });
  return (
    <>
      <ListingMenu />
      <section className="insert-command">
        <h1>Create a New Commad</h1>
        <form action="" className="insert-command-form">
          <label htmlFor="command">
            Command
            <input type="text" name="command" placeholder="command name" id="command" />
          </label>
          <label htmlFor="command-return">
            Command Return
            <input type="text" name="command-return" placeholder="message to return" id="command-return" />
          </label>
          <label htmlFor="count">
            Counter
            <input type="number" name="count" placeholder="count number" id="count" />
          </label>
          <label htmlFor="image">
            Image
            <input type="url" name="image" placeholder="place a image web URL" id="image" />
          </label>
          <label htmlFor="youtube-link">
            Youtube Link
            <input type="url" name="youtube-link" placeholder="place a Youtube link" id="youtube-link" />
          </label>
          <button type="submit">Insert</button>
        </form>
      </section>
    </>
  );
}
