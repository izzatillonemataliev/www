import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

import { useGlobalContext } from "../hooks/useGlobalContext";
import Product from "./Product";
function CardItem({ product }) {
  const [amount, setAmount] = useState(0);
  const { deleteProduct, increaseAmount, decreaseAmount } = useGlobalContext();
  useEffect(() => {}, [amount]);
  return (
    <div className="card  card-side  w-96 bg-base-100 flex items-center shadow-xl p-20 m-20">
      <li>
        <img src={product.thumbnail} alt={product.thumbnail} />

        <h2>{product.title}</h2>
        <p>Price: {product.price}$</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Total: {product.amount}</p>

        <div className="card-actions justify-end flex items-center gap-4 mb-10">
          <button onClick={() => deleteProduct(product.id)}>
            <FaTrash />
          </button>
          <button
            onClick={() => increaseAmount(product.id)}
            className="btn btn-secondary"
          >
            +
          </button>
          <div>{product.amount}</div>
          <button
            onClick={() => decreaseAmount(product.id)}
            className="btn btn-secondary"
          >
            -
          </button>
        </div>
      </li>
    </div>
  );
}

export default CardItem;
