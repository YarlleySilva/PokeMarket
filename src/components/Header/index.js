import React from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import './styles.scss';

const Header = ({ handleOpenCart }) => {
  return (
    <header>
      <div className="header-content">

        <h1>PokeMarket</h1>
        <div className="header_icons">
          <FaSearch />
          <FaShoppingCart onClick={handleOpenCart} />
        </div>

      </div>
    </header>
  );
}

export default Header;