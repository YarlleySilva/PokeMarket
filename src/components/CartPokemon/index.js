import React, { useMemo } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Swal from "sweetalert2";
import './styles.scss';

const CartPokemon = ({ listCartPokemon, handleCloseCart }) => {


  //Apaga o Storage
  // const cleanCart = () => {
  //   localStorage.removeItem("@cartPokemonsGhost");
  // }

  //abre o modal de compra finalizada
  const handleFinishCart = () => {
    Swal.fire({
      title: "Obrigado por comprar.",
      text: "Volte sempre!",
      icon: "success",
    });
  }


  //soma total de todos os preços
  const totalCart = useMemo(() => {
    const totalFinish = listCartPokemon.map(pokemons => {
      return pokemons.price;
    });

    let totalFinal = 0;
    if (totalFinish.length > 0) {
      totalFinal = totalFinish.reduce((a, b) => a + b);
    }

    if (totalFinal > 0) {
      return totalFinal;
    }
    return 0;
  }, [listCartPokemon]);


  return (
    < div className="overlay" >

      <OutsideClickHandler onOutsideClick={() => handleCloseCart(false)}>

        <div className="cartMenu">

          <div className="containerCart">

            {listCartPokemon.map(element => {
              const [name, price, quantity] = [element.name, element.price, element.quantity];
              return (

                <div className="infoPoke" key={name} >
                  <p className="pokeName">{name}</p>
                  <div className="pokeQuantity">
                    <span><b>Quantidade: {quantity}</b></span>
                  </div>

                  <p className="pokePrice">Total R$: {price}</p>
                </div>
              )
            })}

          </div>

          <div className="finishPay">
            <button
              onClick={handleFinishCart}
              className="buttonFinish"
              disabled={listCartPokemon.length === 0 ? true : false}
            >
              Finalizar Compra {totalCart}
            </button>
          </div>

        </div>

      </OutsideClickHandler>

    </div >
  );
}

export default CartPokemon;