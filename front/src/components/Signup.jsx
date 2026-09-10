import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Signup = () => {
  const navigate = useNavigate();

  const { setToken } = useContext(ShopContext);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }

    const token = "local-session";

    setToken(token);
    localStorage.setItem("token", token);

    navigate("/");
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-24 px-6 sm:px-10 flex items-center justify-center">
      
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none"></div>

      {/* Signup Card */}
      <div
        className="
          relative z-10
          w-full max-w-sm
          bg-white/10
          backdrop-blur-md
          px-8 py-7
          rounded-3xl
          border border-white/10
          shadow-2xl
        "
      >
        <h2
          className="
            text-3xl
            font-extrabold
            mb-6
            text-center
          "
        >
          إنشاء حساب جديد
        </h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSignup}
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="الاسم الكامل"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="
              w-full
              h-12
              px-4
              bg-white/30
              rounded-xl
              text-black
              placeholder-gray-600
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              transition-all
            "
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="
              w-full
              h-12
              px-4
              bg-white/30
              rounded-xl
              text-black
              placeholder-gray-600
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              transition-all
            "
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className="
              w-full
              h-12
              px-4
              bg-white/30
              rounded-xl
              text-black
              placeholder-gray-600
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              transition-all
            "
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="تأكيد كلمة المرور"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className="
              w-full
              h-12
              px-4
              bg-white/30
              rounded-xl
              text-black
              placeholder-gray-600
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              transition-all
            "
          />

          {/* Error */}
          {error && (
            <p
              className="text-sm text-red-200"
              role="alert"
            >
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              h-12
              bg-linear-to-r
              from-cyan-400
              to-blue-500
              text-white
              font-semibold
              rounded-xl
              hover:opacity-90
              transition-all
              shadow-lg
            "
          >
            إنشاء الحساب
          </button>
        </form>

        {/* Login */}
        <p
          className="
            mt-5
            text-center
            text-gray-300
          "
        >
          لديك حساب؟{" "}

          <Link
            to="/login"
            className="
              text-cyan-400
              font-semibold
              cursor-pointer
              hover:underline
            "
          >
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;