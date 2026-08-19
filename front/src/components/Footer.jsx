import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`شكراً لتواصلك معنا ${formData.name}`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
 <section
  className="relative w-full min-h-screen bg-gradient-to-r
  from-indigo-900 via-purple-800 to-pink-900
  text-white py-24 px-6 sm:px-10"
>
  <div
    className="absolute inset-0 bg-black/30 backdrop-blur-sm
    pointer-events-none"
  ></div>

  <div className="relative z-10 max-w-7xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
      تواصل معنا
    </h2>

    <p className="text-gray-300 mb-12 text-center text-lg sm:text-xl">
      نحن هنا لمساعدتك في أي وقت! أرسل لنا رسالة وسنعود إليك قريبًا!
    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  <div className="space-y-8">
    <div
      className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6
      rounded-3xl shadow-lg hover:shadow-cyan-400/30 transition-all"
    >
      <MapPin className="w-8 h-8 text-cyan-400" />

      <div>
        <h4 className="font-semibold text-lg">العنوان</h4>
        <p className="text-gray-300">
          123 شارع التخيل، مدينة المستقبل
        </p>
      </div>
    </div>

    <div
      className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6
      rounded-3xl shadow-lg hover:shadow-cyan-400/30 transition-all"
    >
      {/* Contact information */}
    </div>
  </div>
</div>
  
  </div>
</section>
  );
};

export default Footer;