import {useState,useContext} from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("register");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });   

  return (
    
<section
  className="relative w-full min-h-screen bg-gradient-to-r
  from-indigo-900 via-purple-900 to-pink-900
  text-white py-24 px-6 sm:px-10
  flex items-center justify-center"
>
  <div
    className="absolute inset-0 bg-black/30 backdrop-blur-sm"
  ></div>

  <div
    className="relative z-10 w-full max-w-md
    bg-white/10 p-10 rounded-3xl shadow-2xl"
  >
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center">
      إنشاء حساب جديد
    </h2>

    <form className="flex flex-col gap-6">
      <input
        type="text"
        name="name"
        placeholder="الاسم"
        value={formData.name}
        required
        className="bg-white/30 p-4 rounded-xl
        text-black placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-cyan-400
        transition-all"
      />
       <input
        type="text"
        name="name"
        placeholder="الاسم"
        value={formData.name}
        required
        className="bg-white/30 p-4 rounded-xl
        text-black placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-cyan-400
        transition-all"
      />
    
       <input
        type="email"
        name="email"
        placeholder="البريد الإلكتروني"
        value={formData.email}
        required
        className="bg-white/30 p-4 rounded-xl
        text-black placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-cyan-400
        transition-all"
      />
       <input
        type="password"
        name="password"
        placeholder="كلمة المرور"
        value={formData.password}
        required
        className="bg-white/30 p-4 rounded-xl
        text-black placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-cyan-400
        transition-all"
      />
       <input
        type="password"
        name="confirmPassword"
        placeholder="تأكيد كلمة المرور"
        value={formData.confirmPassword}
        required
        className="bg-white/30 p-4 rounded-xl
        text-black placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-cyan-400
        transition-all"
        
      />
    
<button
  type="submit"
  className="bg-gradient-to-r from-cyan-400 to-blue-500
  px-6 py-3 rounded-2xl
  text-white font-semibold
  hover:opacity-90 transition-all shadow-lg"
>
  إنشاء الحساب
</button>

    </form>
    
  </div>
</section>


  )
}

export default Signup
