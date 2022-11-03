import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/HomeMenu/Menu";

import { CartContext } from "../../store/cart";

const Home = () => {
  const cartState = React.useContext(CartContext);
  return (
    <div>
      <Navbar />
      <Menu />
    </div>
  );
};

export default Home;
