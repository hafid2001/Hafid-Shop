import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Categories from "./components/Categories.jsx";
import Footer from "./components/Footer.jsx";
import Items from "./components/Items.jsx";
import Login from "./components/Login.jsx";
import Menuitems from "./components/Menuitems.jsx";
import Offer from "./components/Offer.jsx";
import ProductDisplay from "./components/ProductDisplay.jsx";
import Signup from "./components/Signup.jsx";
import  Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import MyOreders from "./pages/MyOrders.jsx";
import Verify from "./pages/Verify.jsx";



const App = () => {
  return (
    <div>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />

        <Route path="/myorders" element={<MyOreders/>} />

        <Route path="/verify" element={<Verify/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />


      </Routes>
    </div>
  );
};

export default App;
