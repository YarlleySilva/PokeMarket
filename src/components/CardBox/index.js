import React, { useState, useEffect } from 'react';
import axios from "axios";

import './styles.scss';

const CardBox = ({ pokemon, handleAddCart }) => {
  const { name, url, custo = name.length * 100, quantity = 1 } = pokemon;

  //Convertendo o custo para Real
  const price = custo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const [pokeImg, setPokeImg] = useState("");

  //Pegando as imagens/sprites de cada pokemon
  useEffect(() => {
    async function getImg(url) {
      const response = await axios.get(url);
      setPokeImg(response.data.sprites.front_default);
    }

    getImg(url)
  }, [url])

  return (
    <div className="card">

      <img src={pokeImg} alt={name} />

      <div className="info-card">
        <p>{name}</p>
        <p>{price}</p>

        <button onClick={() => handleAddCart(pokemon, custo, quantity)}>Adicionar ao carrinho</button>

      </div>
    </div>
  );
}

export default CardBox;