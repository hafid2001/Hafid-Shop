import React, { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const Verify = () => {
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const storedToken = localStorage.getItem("token");

  const {
    url,
    clearCart,
    removeFromCart,
    setCartItems,
    token,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-900 via-purple-900 to-indigo-900 text-white px-6">
      <div className="text-center flex flex-col items-center">
        {status === "loading" && (
          <>
            <Loader2 className="w-16 h-16 animate-spin mb-4" />

            <h2 className="text-2xl font-semibold">
              Verifying your payment...
            </h2>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle className="w-16 h-16 text-green-400 mb-4" />

            <h2 className="text-2xl font-semibold">
              Payment Successful!
            </h2>
          </>
        )}

        {status === "failed" && (
          <>
            <XCircle className="w-16 h-16 text-red-400 mb-4" />

            <h2 className="text-2xl font-semibold">
              Payment Failed
            </h2>
          </>
        )}
      </div>
    </section>
  );
};

export default Verify;