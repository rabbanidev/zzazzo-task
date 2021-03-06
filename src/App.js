import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components";
import Cart from "./components/cart";
import CategoriesProduct from "./components/categories/CategoriesProduct";
import Details from "./components/details";
import Header from "./components/Header";
import Signin from "./components/Signin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/categories/:category" element={<CategoriesProduct />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
