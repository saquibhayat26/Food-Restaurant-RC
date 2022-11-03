import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__wrapper">
        <p>
          Welcome to food's <br />
          kitchen
        </p>
        <Link to={"/product"} style={{ textDecoration: "none" }}>
          <button>go to menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
