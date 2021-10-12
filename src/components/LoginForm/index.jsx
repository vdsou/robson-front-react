// Login Form
import React from 'react';
import './LoginForm.css';

export default function LoginForm() {
  return (
    <section className="loginForm">
      <h1 className="heading">If you are an admin please log in</h1>
      <form action="">
        <input type="text" placeholder="USERNAME" />
        <input type="password" placeholder="PASSWORD" />
        <button type="submit">ENTER</button>
        <a href="/">sign up</a>
      </form>
    </section>
  );
}
