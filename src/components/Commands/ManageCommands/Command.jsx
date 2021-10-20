// Command: list properties of a command.
/* eslint no-underscore-dangle: 0 */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LayoutContext } from '../../../context/LayoutContext';
import ListingMenu from '../../ListingMenu';
import './Command.css';
import api from '../../../services/api';

export default function Command(props) {
  const { match } = props;
  const [idCommand, setIdCommand] = useState('');
  const [enableInputs, setEnableInputs] = useState(false);
  const [commandResult, setCommandResult] = useState({});
  const { setShowRobsonStats } = useContext(LayoutContext);

  useEffect(() => {
    setShowRobsonStats(false);
  }, []);
  useEffect(() => {
    setIdCommand(match.params.id);
    if (idCommand) {
      api
        .get(`/commands/getcommand/${idCommand}`)
        .then(({ data }) => {
          if (data) {
            setCommandResult(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idCommand]);
  const handleInput = (event) => {
    const { value, name } = event.target;
    setCommandResult({
      ...commandResult,
      [name]: value,
    });
  };
  const handleEnable = () => {
    setEnableInputs(!enableInputs);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .patch(`/commands/update/${idCommand}`, commandResult)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ListingMenu />
      <section className="command-list">
        <h1>{`!${commandResult && commandResult.command}`}</h1>
        <form
          className="command-form"
          id="command-form"
          onSubmit={handleSubmit}
        >
          {Object.entries(commandResult).map(
            (item, index) => item[0] !== '__v' && (
              // Using index as key here rather than key={Math.random() * 99999}
              // eslint-disable-next-line react/no-array-index-key
              <label htmlFor={item[0]} key={index}>
                {`${item[0]}:`}
                <input
                  key={item[0]}
                  type="text"
                  defaultValue={item[1] || ''}
                  name={item[0]}
                  id={item[0]}
                  disabled={item[0] === '_id' || !enableInputs}
                  onChange={handleInput}
                  style={{
                    backgroundColor: `${enableInputs ? '#c4c4c4' : ''}`,
                  }}
                />
              </label>
            ),
          )}
        </form>
        <button type="button" onClick={handleEnable}>
          Edit
        </button>
        {enableInputs && (
          <button form="command-form" type="submit">
            Save
          </button>
        )}
        <button type="button">Delete</button>
      </section>
    </>
  );
}
Command.propTypes = {
  props: PropTypes.any,
}.isRequired;
