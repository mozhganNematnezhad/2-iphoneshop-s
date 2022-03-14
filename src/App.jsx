import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Layout from './Layout/Layout';
import SiqnupPages from './Pages/SiqnupPages/SiqnupPages';
import LoginPages from './Pages/LoginPages/LoginPages';
import CheckoutPages from './Pages/CheckoutPages/CheckoutPages';
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginPages />}></Route>
        <Route path="/siqnup" element={<SiqnupPages />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/checkout" element={<CheckoutPages />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
