

import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { addToCart, all_products } = useContext(ShopContext);

  // من الرابط نأخذ الـ productId
  const { productId } = useParams();

  const product = all_products.find(
    (p) => p._id === productId
  );

  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-gradient-to-r
          from-indigo-900
          via-purple-900
          to-pink-900
          text-white
        "
      >
        <p className="text-2xl font-bold">
          المنتج غير موجود
        </p>
      </section>
    );
  }

  const handleAddToCart = () => {
    // لاحقًا يمكنك إرسال الكمية، اللون، والمقاس إلى API
    addToCart(product._id, quantity);

    alert(
      `تمت إضافة ${quantity} قطعة من ${product.name} إلى السلة!`
    );
  };

  return (
 <section className="relative w-full min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-24 px-6 sm:px-10 flex items-center justify-center ">
  <div   className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-10 flex flex-col md:flex-row gap-10 shadow-2xl" ></div>   
<div className="md:w-1/2 flex items-center justify-center bg-white/5 rounded-3xl p-8">
  <img
    src={product.image}
    alt={product.name}
    className="w-64 h-64 object-contain rounded-2xl"
  />
</div>

<div className="flex-1 flex flex-col gap-6">
  <h2 className="text-4xl font-extrabold">
    {product.name}
  </h2>

  <p className="text-gray-300 text-lg">
    {product.description}
  </p>

  <p className="text-cyan-400 text-3xl font-bold">
    ${product.price}
  </p>

  <p className="text-gray-200 text-lg">
    Category: {product.category}
  </p>
</div>

</section>
  );
};

export default Product;