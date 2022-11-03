import React, { useState } from "react";
import { useEffect } from "react";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [localData, setLocaldata] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("data/feeds.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const productData = JSON.stringify(myJson);
        const data = JSON.parse(productData);
        setLocaldata(data);
      });
  };

  return (
    <div className="items">
      <div className="items__wrapper">
        {localData &&
          localData.map((product, index) => (
            <Item key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Items;
