import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS as SHIRTS_PRODUCTS } from "../../proshirts";
import { PRODUCTS as ACCESSORIES_PRODUCTS } from "../../proacc";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, checkout } = useContext(ShopContext);

  const allProducts = [...SHIRTS_PRODUCTS, ...ACCESSORIES_PRODUCTS, ...PRODUCTS];

  const subtotal = allProducts.reduce((acc, product) => {
    if (cartItems[product.id] > 0) {
      return acc + product.price * cartItems[product.id];
    }
    return acc;
  }, 0);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {allProducts.map((product) => (
          cartItems[product.id] > 0 && <CartItem key={product.id} data={product} />
        ))}
      </div>
      {subtotal > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <button onClick={() => navigate("/shop")}>Continue Shopping</button>
          <button onClick={() => navigate("/payment")}>Go to Payment</button>
        </div>
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  );
};

