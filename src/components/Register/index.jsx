import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <section className="register">
      <h1 className="heading">Register to manage commands</h1>
      <form action="" className="signinForm">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
