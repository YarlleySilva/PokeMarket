import React from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import logoImg from "../../assets/pokemarket.png";

import './styles.scss';

const Header = ({ handleOpenCart }) => {
  return (
    <header>
      <div className="header-content">

        <img src={logoImg} alt="PokeMarket" />
        <div className="header_icons">
          <FaSearch className="lupa" />
          <FaShoppingCart onClick={handleOpenCart} />
        </div>

      </div>
    </header>
  );
}

export default Header;