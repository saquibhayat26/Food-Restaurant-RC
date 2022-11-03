import React from "react";
import { CartReducer, sumItems } from "./reducer";

export const CartContext = React.createContext();

//local storage
const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export const CartProvider = (props) => {
  //   Initial State of the cart
  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };

  //Set up the reducer
  const [state, dispatch] = React.useReducer(CartReducer, initialState);

  //Function to handle when an item is added from the store into the Cart
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  //Function to handle when an item that is in the cart is added again
  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  //Function to handle when an item is removed from the cart
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  //Function to handle when the user clicks the checkout button
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    //Add the functions that have been defined above into the Context provider, and pass on to the children
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        increase,
        decrease,
        handleCheckout,
        dispatch,
        ...state,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
