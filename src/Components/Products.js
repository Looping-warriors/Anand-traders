import React from "react";
import product1 from "../Assets/products/product1.jpg";
import product2 from "../Assets/products/product2.jpg";
import product3 from "../Assets/products/product3.jpg";
import product4 from "../Assets/products/product4.png";
import product5 from "../Assets/products/product5.jpg";
import product6 from "../Assets/products/product6.jpg";

import "../css/Products.css";

function Products() {
  window.scrollTo(0, 0);

  return (
    <div className="products">
      <div className="container">
        <div className="product-head">
          <h3>Our Product Range</h3>
          <p>
            100% Cotton Handloom / Power loom made-ups & Fabrics of Dyed,
            Printed, Woven & Jacquard.
          </p>
        </div>
        <div className="sample-image">
          <img src={product5} />
        </div>
        <h3 className="product-list-title">Our Product List</h3>
        <div className="product-image-flex">
          <div className="product-card-one">
            <img src={product1}></img>
            <div className="product-caption">
              <h3>Apron</h3>
            </div>
          </div>
          <div className="product-card-two">
            <img src={product2}></img>
            <div className="product-caption">
              <h3>Bag</h3>
            </div>
          </div>
          <div className="product-card-three">
            <img src={product3}></img>
            <div className="product-caption">
              <h3>Gloves</h3>
            </div>
          </div>
        </div>
        <div className="product-image-flex">
          <div className="product-card-one">
            <img src={product4}></img>
            <div className="product-caption">
              <h3>Apron</h3>
            </div>
          </div>
          <div className="product-card-two">
            <img src={product5}></img>
            <div className="product-caption">
              <h3>Bag</h3>
            </div>
          </div>
          <div className="product-card-three">
            <img src={product6}></img>
            <div className="product-caption">
              <h3>Beach Mattress</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
