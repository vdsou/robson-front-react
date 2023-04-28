// Expired
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LayoutContext } from '../../context/LayoutContext';
import './Expired.css';

export default function Expired() {
  const { setShowRobsonStats } = useContext(LayoutContext);
  useEffect(() => {
    setShowRobsonStats(true);
  });
  return (
    <>
      <section className="expired">
        <h1>Session expired :(</h1>
        <p>
          please
          {' '}
          <Link to="/login">login again</Link>
        </p>
      </section>
    </>
  );
}
