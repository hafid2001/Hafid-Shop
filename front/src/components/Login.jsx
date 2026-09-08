import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(ShopContext);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setToken("local-session");
    localStorage.setItem("token", "local-session");
    navigate("/");
  };
  return (
    <section
      dir="rtl"
      className="relative w-full min-h-screen bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-24 px-6 sm:px-10 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none"></div>

      <div
        className="relative z-10 w-full max-w-md
  bg-white/10 backdrop-blur-md
  p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/10"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center">
          تسجيل الدخول
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <label htmlFor="login-email" className="sr-only">
            البريد الإلكتروني
          </label>
          <input
            id="login-email"
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="
  bg-white/30
  p-4
  rounded-xl
  text-black
  placeholder-gray-600
  font-semibold
  focus:outline-none
  focus:ring-2
  focus:ring-cyan-400
  transition-all
"
          />
          <label htmlFor="login-password" className="sr-only">
            كلمة المرور
          </label>
          <input
            id="login-password"
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
            className="
  bg-white/30
  p-4
  rounded-xl
  text-black
  placeholder-gray-600
  font-semibold
  focus:outline-none
  focus:ring-2
  focus:ring-cyan-400
  transition-all
"
          />
          <button
            type="submit"

            className="
  bg-linear-to-r
  from-indigo-500
  via-purple-500
  to-pink-500
  px-6
  py-3
  rounded-2xl
  text-white
  font-semibold
  hover:opacity-90
  transition-all
  shadow-lg
"
          >
            تسجيل الدخول
          </button>
        </form>
        <p className="mt-6 text-center text-gray-300">
          ليس لديك حساب؟{" "}
          <Link
            to="/signup"
            className="text-cyan-400 font-semibold cursor-pointer hover:underline"
          >
            إنشاء حساب
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Login;
