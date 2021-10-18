// Commands List
import React, { useContext, useEffect } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import './CommandsList.css';

export default function CommandsList() {
  const { setShowRobsonStats } = useContext(LayoutContext);
  useEffect(() => {
    setShowRobsonStats(false);
  }, []);
  return (
    <section className="list-commands">
      <h1>CommandsList</h1>
    </section>
  );
}
