import React, { useState, useEffect } from 'react';
import api from "../../services/api";


import Header from "../../components/Header";
import CardBox from "../../components/CardBox";
import Cart from "../../components/CartPokemon";

import './styles.scss';

const Ghost = () => {

  const [pokemons, setPokemons] = useState([]);
  const [pokeSearchName, setPokeSearchName] = useState("");

  const [listCartPokemon, setListCartPokemon] = useState([]); // lista de Pokemons para enviar ao Cart
  const [openCart, setOpenCart] = useState(false); // Estado do Carrinho Aberto ou Fechado


  useEffect(() => {
    async function getPokemons() {
      const response = await api.get("/8/");
      setPokemons(response.data.pokemon);
    }
    getPokemons();

  }, []);

  //Lista de Pokemons para passar para o Cart
  const handleAddCart = (newPokemon, price, quantity) => {
    const Pokemon = {
      name: newPokemon.name,
      price: price,
      quantity: quantity
    };
    let newListCartPokemon = [...listCartPokemon];

    listCartPokemon.map(updatePoke => {
      if (newPokemon.name === updatePoke.name) {

        Pokemon.quantity += updatePoke.quantity;
        Pokemon.price *= Pokemon.quantity;

        newListCartPokemon = listCartPokemon.filter(pokemon => pokemon.name !== updatePoke.name);
      }
      return newListCartPokemon;
    });

    setListCartPokemon([...newListCartPokemon, Pokemon]);
  }

  console.log(listCartPokemon);

  //Abre o Carrinho
  const handleOpenCart = () => {
    setOpenCart(openCart => !openCart);
  }

  //fecha o carrinho
  const handleCloseCart = (value) => {
    setOpenCart(value);
  }


  return (
    <div className="container">

      {openCart ?
        <Cart
          listCartPokemon={listCartPokemon}
          handleCloseCart={handleCloseCart}
        />
        : null
      }

      <Header handleOpenCart={handleOpenCart} />

      <div>
        <input
          type="text"
          placeholder="Digite um nome de Pokémon"
          value={pokeSearchName}
          onChange={(e) => setPokeSearchName(e.target.value)}
        />
      </div>

      <div className="grid-cards">

        {pokemons.filter(searchPokemon =>
          searchPokemon.pokemon.name.includes(pokeSearchName))
          .map(filterPokemon =>
            <CardBox
              key={filterPokemon.pokemon.name}
              pokemon={filterPokemon.pokemon}
              handleAddCart={handleAddCart}
            />
          )
        }

      </div>

    </div>
  );
}

export default Ghost;