import { useEffect, useState } from "react";

import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Menu from "./components/Menu";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import useCart from "./hooks/useCart";
import Cart from "./components/Cart";
//#FFA07A

function App() {
  
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Router>
  );
}

export default App;
