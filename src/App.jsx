import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import Info from './components/Info';
import Footer from './components/Footer';
import Routes from './components/Router/routes';
import './App.css';
import api from './services/api';

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
  useEffect(() => {
    api
      .get('/commands/get')
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Header userScroll={userScrollY} />
      <Featured />
      <Info />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
