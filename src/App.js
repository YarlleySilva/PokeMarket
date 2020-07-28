import React from 'react';
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Notifications from "react-notify-toast";

import './app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
      <Notifications />
    </BrowserRouter>
  );
}

export default App;
