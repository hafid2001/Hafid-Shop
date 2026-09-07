import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { cartItems, all_products, getTotalCartAmount } =
    useContext(ShopContext);

  const navigate = useNavigate();
  const total = getTotalCartAmount();

  const cartProducts = Object.keys(cartItems)
    .map((id) => {
      const product = all_products.find((p) => p._id === id);
      return product ? { ...product, quantity: cartItems[id] } : null;
    })
    .filter(Boolean);

  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmOrder = () => {
    if (!shipping.name || !shipping.address || !shipping.city || !shipping.phone) {
      alert("Please fill in all shipping details.");
      return;
    }
    alert("confirmed");
    navigate("/");
  };

  return (
    <section
      dir="rtl"
      className="relative w-full min-h-screen bg-gradient-to-r
      from-indigo-900 via-purple-900 to-pink-900"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-white py-24 px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center">
          إتمام الطلب
        </h2>

        {cartProducts.length === 0 ? (
          <div className="text-center text-gray-300 mt-20 space-y-6">
            <p className="text-xl">السلة فارغة الآن</p>

            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500
              px-8 py-3 rounded-2xl font-semibold text-white
              hover:opacity-90 transition-all"
            >
              العودة إلى المتجر
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {cartProducts.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl
                  shadow-lg border border-white/20"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-xl"
                  />

                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <p className="text-sm text-gray-300">
                      Quantity: {item.quantity}
                    </p>

                    <p className="text-cyan-400 font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}

              <div className="text-xl font-bold mt-6">
                المجموع الكلي:
                <span className="text-cyan-400 ml-2">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div
              className="bg-white/10 p-8 rounded-3xl backdrop-blur-md
              border border-white/20 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">
                بيانات الشحن
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم الكامل"
                  value={shipping.name}
                  onChange={handleChange}
                  className="w-full bg-white/15 text-white placeholder:text-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="العنوان"
                  value={shipping.address}
                  onChange={handleChange}
                  className="w-full bg-white/15 text-white placeholder:text-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="المدينة"
                  value={shipping.city}
                  onChange={handleChange}
                  className="w-full bg-white/15 text-white placeholder:text-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={shipping.phone}
                  onChange={handleChange}
                  className="w-full bg-white/15 text-white placeholder:text-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
                />

                <button
                  onClick={handleConfirmOrder}
                  className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  text-white font-semibold py-3 rounded-xl
                  hover:opacity-90 transition-all mt-4"
                >
                  تأكيد الطلب
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Order;