// Header
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import './Header.css';

export default function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const { userScroll } = props;
  return (
    <header
      className="header"
      style={{
        background: `${userScroll ? '#e3e7f2' : 'none'}`,
        color: '#fff',
      }}
    >
      <a href="/" className="logo">
        robson.bot
        <span className="blink">_</span>
      </a>
      <img src="images/rob.svg" alt="Robot" />
      <div className="menu-button">
        <button type="button" onClick={handleShowMenu}>
          <img src="images/menu.svg" alt="" />
        </button>
      </div>
      <div className={`nav ${showMenu ? 'active' : ''}`}>
        <button
          type="button"
          className="left"
          onClick={handleShowMenu}
          aria-label="text"
        />
        <div className="right">
          <div className="top">
            <h1 className="logo-white">robson.bot</h1>
            <img src="images/rob-white.svg" alt="" />
          </div>
          <a href="#Commands">Commands</a>
          <a href="#Users">Users</a>
          <a href="#Setting">Setting</a>
          <a href="#Logout">Logout</a>
          <a href="#About">About</a>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  userScroll: Proptypes.bool,
}.isRequired;