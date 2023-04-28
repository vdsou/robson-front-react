// Listing Menu for commands and users
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './ListingMenu.css';

export default function ListingMenu() {
  return (
    <section className="listing-menu">
      <div className="content">
        <Link to="/commands/manage-commands">Manage commands</Link>
        <Link to="/commands/manage-users">Manage users</Link>
      </div>
    </section>
  );
}
