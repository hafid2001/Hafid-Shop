

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    all_products,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const navigate = useNavigate();
  const total = getTotalCartAmount();

  const cartProducts = Object.keys(cartItems).map((id) => {
    const product = all_products.find((p) => p._id === id);

    return {
      ...product,
      quantity: cartItems[id],
    };
  });

  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-r
      from-indigo-900 via-purple-900 to-pink-900
      text-white py-24 px-6 sm:px-10"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none"></div>
    </section>
  );
};

export default Cart;