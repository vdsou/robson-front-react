import React from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import Info from './components/Info';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <Info />
    </div>
  );
}

export default App;
