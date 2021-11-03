// Expired
import React, { useContext, useEffect } from 'react';
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
          <a href="/login">login again</a>
        </p>
      </section>
    </>
  );
}
