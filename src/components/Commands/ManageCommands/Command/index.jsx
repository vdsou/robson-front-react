// Command: list properties of a command.
/* eslint no-underscore-dangle: 0 */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Error from '../../../Error';
import { LayoutContext } from '../../../../context/LayoutContext';
import ListingMenu from '../../../ListingMenu';

import api from '../../../../services/api';

import './Command.css';
import Success from '../../../Success';

export default function Command(props) {
  const { match } = props;
  const [commandId, setCommandId] = useState('');
  const [showButtons, setShowButtons] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [updateData, setUpdateData] = useState({
    updateSuccess: undefined,
    message: '',
    err: '',
  });
  const [deleteData, setDeleteData] = useState({
    deleteSuccess: undefined,
    message: '',
    link: '',
    err: '',
  });
  const [enableInputs, setEnableInputs] = useState(false);
  const [commandResult, setCommandResult] = useState({});
  const { setShowRobsonStats } = useContext(LayoutContext);

  useEffect(() => {
    setShowRobsonStats(false);
  }, []);
  useEffect(() => {
    setCommandId(match.params.id);
    if (commandId) {
      api
        .get(`/commands/getcommand/${commandId}`)
        .then(({ data }) => {
          if (data) {
            setCommandResult(data);
          }
        })
        .catch((err) => {
          setCommandResult({ err });
        });
    }
  }, [commandId]);
  const handleInput = (event) => {
    const { value, name } = event.target;
    setCommandResult({
      ...commandResult,
      [name]: value,
    });
  };
  const handleEnable = () => {
    setEnableInputs(!enableInputs);
    setShowConfirm(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .patch(`/commands/update/${commandId}`, commandResult)
      .then(({ data }) => {
        setUpdateData({
          message: 'Command updated successfully!',
          updateSuccess: data.success,
        });
        setEnableInputs(!enableInputs);
      })
      .catch((err) => {
        setUpdateData({
          updateSuccess: false,
          err,
        });
      });
  };
  const handleDelete = () => {
    api
      .delete(`/commands/delete/${commandId}`)
      .then(({ data }) => {
        if (data) {
          setDeleteData({
            message: 'Command deleted successfully!',
            deleteSuccess: true,
            link: '/commands',
          });
          setShowButtons(false);
        }
      }).catch((err) => {
        setDeleteData({
          err,
          deleteSuccess: false,
        });
      });
  };
  const handleConfirm = () => {
    setShowConfirm(!showConfirm);
  };
  const { updateSuccess, err, message } = updateData;
  return (
    <>
      <ListingMenu />
      {commandResult.command !== undefined ? (
        <section className="command-list">
          {commandResult.command && <h2>{`!${commandResult.command}`}</h2>}
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
                    disabled={item[0] === '_id' || item[0] === 'user' || item[0] === 'createdAt' || !enableInputs}
                    onChange={handleInput}
                    style={{
                      backgroundColor: `${enableInputs ? '#c4c4c4' : ''}`,
                      color: `${enableInputs ? 'var(--black)' : ''}`,
                    }}
                  />
                </label>
              ),
            )}
          </form>
          {showButtons && (
            <div className="controll-buttons">
              <div className="primary-buttons">
                <button type="button" onClick={handleEnable}>
                  {`${enableInputs ? 'Cancel' : 'Edit'}`}
                </button>
                {enableInputs && (
                  <button form="command-form" type="submit">
                    Save
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleConfirm}
                  className={showConfirm ? 'confirm-cancel' : ''}
                >
                  {`${showConfirm ? 'Cancel' : 'Delete'}`}
                </button>
              </div>
              {showConfirm
              && (
              <div className="confirm-delete">
                <span>Are you?</span>
                <button type="button" className="confirm-yes" onClick={handleDelete}>Yes</button>
              </div>
              )}
            </div>

          )}
        </section>
      )
        : (<section className="command-list"><h1>No command found...</h1></section>)}
      {updateSuccess !== undefined
      && (!updateSuccess ? <Error err={err} /> : <Success msg={message} />)}
      {deleteData.deleteSuccess !== undefined
      && (!deleteData.deleteSuccess
        ? <Error err={deleteData.err} />
        : (
          <Success
            msg={deleteData.message}
            link={deleteData.link}
          />
        )
      )}
    </>
  );
}
Command.propTypes = {
  props: PropTypes.any,
}.isRequired;
