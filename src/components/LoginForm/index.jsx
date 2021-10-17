// Login Form
import React, { useContext, useState } from 'react';
import { Context } from '../../context/AuthContext';
import WelcomeSignup from '../WelcomeSignup';
import './LoginForm.css';

export default function LoginForm() {
  const { handleLogin, signupSuccess } = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin({
      username,
      password,
    });
  };
  return (
    <section className="loginForm">
      {signupSuccess ? (
        <WelcomeSignup />
      ) : (
        <h1 className="heading">If you are an admin please log in</h1>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={handleUsername}
          required
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={handlePassword}
          required
        />
        <button type="submit">ENTER</button>
        <a href="/register">sign up</a>
      </form>
    </section>
  );
}
