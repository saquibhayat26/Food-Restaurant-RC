import React, { useContext } from "react";
import Button from "../Buttons/Button";
import "./Cart.css";

import { CartContext } from "../../store/cart";

import { Link } from "react-router-dom";

const Cart = ({ open, setOpen }) => {
  // Extract these functions from the CartContext
  const { increase, decrease, cartItems, handleCheckout, total } =
    useContext(CartContext);

  const handleCancel = () => {
    setOpen(!open);
  };

  return (
    <div className="cart">
      <div className="cart__top">
        <p>Order Summary</p>
      </div>

      <div className="cart__center">
        {cartItems.map((item, index) => (
          <div className="cart__quantity" key={index}>
            <p>{item.name}:</p>
            <p>{item.quantity}</p>
            <div className="cart__quantityBtn">
              <div onClick={() => increase(item)}>
                <Button text={"+"} bgColor={"#e00013"} color={"#fff"} />
              </div>
              <div onClick={() => decrease(item)}>
                <Button text={"-"} bgColor={"#676161"} color={"#ffffff"} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart__total">
        <p>Total (INR): {total}</p>
      </div>
      <div className="cart__bottom">
        <Link to={"/success"} style={{ textDecoration: "none" }}>
          <div
            onClick={() => {
              handleCheckout();
              handleCancel();
            }}
          >
            <Button
              text={"SAVE AND CHECKOUT"}
              bgColor={"#3f51b5"}
              color={"#fff"}
            />
          </div>
        </Link>

        <div onClick={handleCancel}>
          <Button text={"CANCEL"} bgColor={"#c6c6c6"} color={"#3f51b5"} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
