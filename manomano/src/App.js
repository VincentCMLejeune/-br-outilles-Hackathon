import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Screens/Home/Home";
import Product from "./Screens/Product/Product";
import Product2 from "./Screens/Product/Product2"
import Search from "./Screens/Search/Search";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="links">
          <Link to="/home">Go to Home Page</Link>
          <Link to="/product">Go to Product Page</Link>
          <Link to="/search">Go to Search Page</Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
