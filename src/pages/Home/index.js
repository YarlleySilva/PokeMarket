import React from 'react';
import { Link } from "react-router-dom";

import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <Link to="/ghost">
        <div className="page-ghost"></div>
      </Link>

      <Link to="/dragon">
        <div className="page-dragon"></div>
      </Link>

    </div>
  );
}

export default Home;