// Insert a command
import React, { useContext, useEffect, useState } from 'react';
import { LayoutContext } from '../../../../context/LayoutContext';
import ListingMenu from '../../../ListingMenu';
import Error from '../../../Error';
import Success from '../../../Success';
import api from '../../../../services/api';
import './InsertCommand.css';
import { Context } from '../../../../context/AuthContext';

export default function InsertCommad() {
  const { loginData } = useContext(Context);
  const { setShowRobsonStats } = useContext(LayoutContext);
  const initialCommandState = {
    command: '',
    cmdReturn: '',
    count: '',
    image: '',
    audioYt: '',
    userId: loginData.userId,
  };
  const [newCommand, setNewCommand] = useState(initialCommandState);
  const [insertData, setInsertData] = useState({
    insertSuccess: undefined,
    message: '',
    err: '',
  });
  useEffect(() => {
    setShowRobsonStats(false);
  });
  const handleInputs = (event) => {
    const { name, value } = event.target;
    setNewCommand({
      ...newCommand,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    console.log(newCommand);
    event.preventDefault();
    api
      .post('/commands/insert', newCommand)
      .then(({ data }) => {
        if (data) {
          setInsertData({
            message: 'Command inserted successfully',
            insertSuccess: true,
          });
          setNewCommand(initialCommandState);
        }
      })
      .catch((err) => {
        setInsertData({
          err,
          insertSuccess: false,
        });
      });
  };
  const handleCancel = () => {
    setNewCommand(initialCommandState);
  };
  const { err, message, insertSuccess } = insertData;
  return (
    <>
      <ListingMenu />
      <section className="insert-command">
        <h1>Create a New Commad</h1>
        <form onSubmit={handleSubmit} className="insert-command-form">
          <label htmlFor="command">
            Command
            <input
              type="text"
              name="command"
              placeholder="command name"
              id="command"
              value={newCommand.command}
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="command-return">
            Command Return
            <input
              type="text"
              name="cmdReturn"
              placeholder="message to return in Discord"
              id="command-return"
              value={newCommand.cmdReturn}
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="count">
            Counter
            <input
              type="number"
              name="count"
              placeholder="insert number to start a counter"
              id="count"
              value={newCommand.count}
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="image">
            Image
            <input
              type="url"
              name="image"
              placeholder="place a image web URL"
              id="image"
              value={newCommand.image}
              onChange={handleInputs}
            />
          </label>
          <label htmlFor="youtube-link">
            Youtube Link
            <input
              type="url"
              name="audioYt"
              placeholder="place a Youtube URL"
              id="youtube-link"
              value={newCommand.audioYt}
              onChange={handleInputs}
            />
          </label>
          <button type="submit">Insert</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      </section>
      {insertSuccess !== undefined
      && (!insertSuccess ? <Error err={err} /> : <Success msg={message} />)}
    </>
  );
}
