import React from 'react';

import { AuthProvider } from './context/AuthContext';
import { CommandsProvider } from './context/CommandsContext';
import { LayoutProvider } from './context/LayoutContext';

import Featured from './components/Featured';
import Info from './components/Info';
import Routes from './components/Router/routes';

import './App.css';

function App() {
  return (
    <LayoutProvider>
      <AuthProvider>
        <CommandsProvider>
          <div className="App">
            <Featured />
            <Info />
            <Routes />
          </div>
        </CommandsProvider>
      </AuthProvider>
    </LayoutProvider>
  );
}

export default App;
