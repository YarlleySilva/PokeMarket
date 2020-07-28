import React from 'react';
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

// import { Container } from './styles';
import './app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
