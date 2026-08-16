import { useEffect, useState } from "react";
import { Menu, Rocket, X } from "lucide-react";
import Menuitems from "../components/Menuitems";

const Header = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 ) {
        setSideBarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex items-center h-12 px-10 py-4 w-full fixed top-0 left-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 backdrop-blur-md shadow-xl z-50">
        <div className="hidden lg:flex items-center gap-4">
          <Rocket className="w-8 h-8 text-cyan-400 animate-pulse" />

          <h1 className="text-white font-bold text-xl tracking-widest">
            Hafid-Shop
          </h1>
        </div>

        <div className="flex-1 flex justify-end">
          <Menuitems isMobile={false} />
        </div>
      </header>  

      {/* Mobile Header */}
      <header className="md:hidden h-12 flex justify-between items-center px-4 py-4 w-full fixed top-0 left-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 backdrop-blur-md shadow-xl z-50">
        <div className="flex items-center gap-2">
          <Rocket className="w-8 h-8 text-cyan-400 animate-pulse" />

          <h1 className="text-white font-bold text-xl tracking-widest">
            Hafid-Shop
          </h1>
        </div>

        <button
          onClick={() => setSideBarOpen(true)}
          className="text-white p-2 rounded-lg"
        >
          <Menu className="w-8 h-8 cursor-pointer" />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-12 right-0 h-full w-72 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 shadow-2xl backdrop-blur-md transform transition-transform duration-500 z-40 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setSideBarOpen(false)}
            className="text-white p-3 hover:bg-white/20 rounded-lg transition-all duration-300"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Menu */}
        <div className="mt-10 px-6 space-y-6">
          <Menuitems
            setSideBarOpen={setSideBarOpen}
            isMobile={true}
          />
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          onClick={() => setSideBarOpen(false)}
        />
      )}
    </>
  );
};

export default Header;