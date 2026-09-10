import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { addToCart, all_products } = useContext(ShopContext);

  // من الرابط نأخذ الـ productId
  const { productId } = useParams();

  const product = all_products.find((p) => p._id === productId);

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
        <p className="text-2xl font-bold">المنتج غير موجود</p>
      </section>
    );
  }

  const handleAddToCart = () => {
    // لاحقًا يمكنك إرسال الكمية، اللون، والمقاس إلى API
    addToCart(product._id, quantity);

    alert(`تمت إضافة ${quantity} قطعة من ${product.name} إلى السلة!`);
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white pt-28 pb-6 px-6 sm:px-10 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-5 flex flex-col md:flex-row gap-5 shadow-2xl">
        <div className="md:w-2/5 flex items-center justify-center bg-white/5 rounded-2xl p-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-xl"
          />
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
            {product.name}
          </h2>

          <p className="text-gray-300 text-sm line-clamp-2">
            {product.description}
          </p>

          <p className="text-cyan-400 text-xl md:text-2xl font-bold">
            ${product.price}
          </p>

          <p className="text-gray-200 text-sm">Category: {product.category}</p>

          <div className="flex flex-col gap-3">
            <div>
              <h4 className="text-sm font-semibold mb-1">Color:</h4>

              <div className="flex gap-2">
                {["Red", "Blue", "Green", "Black", "White"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`
                      w-6
                      h-6
                      rounded-full
                      border-2
                      border-white
                      transition-all
                      ${
                        selectedColor === color
                          ? "scale-125 border-cyan-500"
                          : ""
                      }
                    `}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-1">Size:</h4>

              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-3
                      py-1
                      text-sm
                      rounded-lg
                      border-2
                      border-white
                      transition-all
                      ${
                        selectedSize === size
                          ? "bg-cyan-400 text-black scale-105"
                          : ""
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <h4 className="text-sm font-semibold">Quantity:</h4>

              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="
                  bg-white/20
                  px-2.5
                  py-0.5
                  text-sm
                  rounded-lg
                  hover:bg-white/30
                  transition-all
                "
              >
                -
              </button>

              <span className="px-2 text-sm">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="
                  bg-white/20
                  px-2.5
                  py-0.5
                  text-sm
                  rounded-lg
                  hover:bg-white/30
                  transition-all
                "
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="
                w-full
                bg-gradient-to-r
                from-indigo-500
                via-purple-500
                to-pink-500
                px-4
                py-2
                text-sm
                md:text-base
                rounded-xl
                font-semibold
                hover:opacity-90
                transition-all
                text-white
                shadow-lg
              "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;