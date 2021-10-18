// Info
import React, { useContext } from 'react';

import { LayoutContext } from '../../context/LayoutContext';

import './Info.css';

export default function Info() {
  const { showRobsonStats } = useContext(LayoutContext);
  console.log('info', showRobsonStats);
  if (!showRobsonStats) {
    return null;
  }
  return (
    <div className="info">
      <h1 className="heading">RobsonBot Stats</h1>
      <div className="content">
        <p>2 servers</p>
        <p>750 requests</p>
        <p>25 commands</p>
        <p>100 hours up</p>
      </div>
    </div>
  );
}
