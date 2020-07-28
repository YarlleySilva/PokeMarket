import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="page-ghost">
        <Link to="/ghost">Ghost</Link>
      </div>

      <div className="page-dragon">
        <Link to="/dragon">Dragon</Link>
      </div>
    </div>
  );
}

export default Home;