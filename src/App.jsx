import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import Info from './components/Info';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [userScrollY, setuserScrollY] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setuserScrollY(true);
      } else {
        setuserScrollY(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);
  return (
    <div className="App">
      <Header userScroll={userScrollY} />
      <Featured />
      <Info />
      <LoginForm />
    </div>
  );
}

export default App;
