import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Addproduct from "./Components/Addproduct";
import Product from "./Components/Product";
import Basket from "./Components/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
