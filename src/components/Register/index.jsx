import React, { useContext, useState } from 'react';
import { Context } from '../../context/AuthContext';
import './Register.css';

export default function Register() {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    password: '',
  });
  const { name, username, password } = userData;
  const { handleSignup } = useContext(Context);
  const handleInputs = (event) => {
    const { value, name: inputName } = event.target;
    setUserData({
      ...userData,
      [inputName]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup(userData);
  };
  return (
    <section className="signupForm">
      <h1 className="heading">Register to manage commands</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="NAME"
          name="name"
          value={name}
          onChange={handleInputs}
        />
        <input
          type="text"
          placeholder="USERNAME"
          name="username"
          value={username}
          onChange={handleInputs}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          name="password"
          value={password}
          onChange={handleInputs}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
