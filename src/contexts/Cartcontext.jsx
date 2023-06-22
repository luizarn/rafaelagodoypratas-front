/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(cartItems.length);
  }, []);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
    // Adicione a lógica para adicionar o item ao carrinho
    // Exemplo: localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
  };

  const removeFromCart = () => {
    setCartCount((prevCount) => prevCount - 1);
    // Adicione a lógica para remover o item do carrinho
    // Exemplo: localStorage.setItem('cartItems', JSON.stringify(cartItems.filter((cartItem) => cartItem.id !== item.id)));
  };

  const clearCart = () => {
    setCartCount(0);
    // Adicione a lógica para limpar o carrinho
    // Exemplo: localStorage.removeItem('cartItems');
  };

  const contextValue = {
    cartCount,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}