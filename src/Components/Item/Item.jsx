import React, { useContext } from "react";
import Button from "../Buttons/Button";
import "./Item.css";

import { CartContext } from "../../store/cart";

const Item = ({ product }) => {
  // Extract these functions from the CartContext
  const { addToCart, increase, decrease, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="item">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>Price: Rs.{product.price}</p>
      <div className="item__btn">
        {/* INCREASE FROM CART */}

        {isInCart(product) && (
          <div onClick={() => increase(product)}>
            <Button text={"+"} bgColor={"#e00013"} color={"#fff"} />
          </div>
        )}

        {!isInCart(product) && (
          <div onClick={() => addToCart(product)}>
            <Button text={"+"} bgColor={"#3f51b5"} color={"#fff"} />
          </div>
        )}

        {/* DECREASE FROM CART */}

        {isInCart(product) && (
          <div onClick={() => decrease(product)}>
            <Button text={"-"} bgColor={"#676161"} color={"#ffffff"} />
          </div>
        )}

        {!isInCart(product) && (
          <div>
            <Button text={"-"} bgColor={"#c6c6c6"} color={"#3f51b5"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
