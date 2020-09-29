import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProvider from './providers/UserProvider';
import Application from './Components/Application';

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
