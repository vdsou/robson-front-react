import React, { useEffect, useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Featured from './components/Featured';
import Info from './components/Info';
import Footer from './components/Footer';
import Routes from './components/Router/routes';
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
    <AuthProvider>
      <div className="App">
        <Header userScroll={userScrollY} />
        <Featured />
        <Info />
        <Routes />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
