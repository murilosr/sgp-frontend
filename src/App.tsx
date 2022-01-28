import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from 'components/TitleBar';
import SideBar from 'components/SideBar';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <SideBar />
      <Box className="App-header" sx={{marginTop: {xs: "56px", md: "64px"}}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teste
        </a>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
      </Box>
    </div>
  );
}

export default App;
