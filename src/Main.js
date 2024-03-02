import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Layout/Navbar";
import Footer from "../src/Layout/Footer";
import Products from "./Components/Products";
import About from "./Components/About";
import Home from "./Components/Home";
import Process from "./Components/Process";
import Contact from "./Components/Contact";
function Main() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default Main;
