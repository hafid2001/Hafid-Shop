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
          <div className="flex flex-col items-center animate-pulse">
            <Loader2 className="w-20 h-20 animate-spin" />

            <h2 className="text-2xl font-semibold">
              ·.· جاري التحقق من عملية الدفع
            </h2>

            <p className="text-gray-300 mt-2">
              2 يرجى الانتظار قليلا
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center animate-pulse">
            <CheckCircle className="w-20 h-20 text-green-400" />

            <h2 className="text-2xl font-semibold">
              ·.· Payment Successful!
            </h2>

            <p className="text-gray-300 mt-2">
              2 يرجى الانتظار قليلا
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center animate-pulse">
            <XCircle className="w-20 h-20 text-red-400" />

            <h2 className="text-2xl font-semibold">
              ·.· Payment Failed
            </h2>

            <p className="text-gray-300 mt-2">
              2 يرجى الانتظار قليلا
            </p>
          </div>
        )}

      

       
      </div>
    </section>
  );
};

export default Verify;