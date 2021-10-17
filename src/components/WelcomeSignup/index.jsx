import React, { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import './WelcomeSignup.css';

export default function WelcomeSignup() {
  const {
    signupData: { userData },
  } = useContext(Context);
  return (
    <div className="welcome-signup">
      <h1>{`Welcome, ${userData.name}!`}</h1>
      <p>{`Please, login using your username: ${userData.username}`}</p>
    </div>
  );
}
