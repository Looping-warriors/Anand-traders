import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Layout/Navbar";
import Footer from "../src/Layout/Footer";
import Products from "./Components/Pages/Products";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Process from "./Components/Pages/Process";
import Contact from "./Components/Pages/Contact";
function Main() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/home'
            element={<Home />}
          />

          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/process'
            element={<Process />}
          />
          <Route
            path='/products'
            element={<Products />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default Main;
