import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Login from "./pages/Login/Login";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
export const context = createContext();

const App = () => {
  let [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    let res = await axios.get(
      "https://niushasanatkar1998.github.io/git-api/db.json"
    );
    setProduct(res.data.weather);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <context.Provider value={{ product }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};

export default App;
