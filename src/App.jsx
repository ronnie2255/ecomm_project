import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="register" element={<Register /> } />
      <Route path="login" element={<Login /> } />
      <Route path="product" element={<Product /> } />
      <Route path="productList" element={<ProductList /> } />
      <Route path="cart" element={<Cart /> } />
    </Routes>
    //<ProductList />
  )
};

export default App;