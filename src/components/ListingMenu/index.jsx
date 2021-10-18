// Listing Menu for commands and users
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './ListingMenu.css';

export default function ListingMenu() {
  return (
    <section className="listing-menu">
      <div className="content">
        <a href="#">Manage commands</a>
        <a href="#">Manage users</a>
      </div>
    </section>
  );
}