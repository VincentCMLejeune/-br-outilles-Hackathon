import { Route, Routes } from "react-router-dom";

import Home from "./Screens/Home/Home";
import Product from "./Screens/Product/Product";
import Product2 from "./Screens/Product/Product2"
import Search from "./Screens/Search/Search";
import Header from "./Components/Header/header";
import HomePro from "./Screens/HomePro/HomePro";

import "./App.css";
import MyAccount from "./Screens/MyAccount/MyAccount";

export default function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/home/pro" element={<HomePro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
    </div>
  );
}
