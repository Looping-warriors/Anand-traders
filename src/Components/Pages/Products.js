import React from "react";
import product5 from "../../Assets/products/product5.jpg";
import "../../css/Products.css";
import MediaCover from "../MediaCover";
import { motion } from "framer-motion";

function Products() {
  window.scrollTo(0, 0);

  return (
    <div className='products'>
      <div className='container'>
        <motion.div
          initial={{ position: "relative", top: 200, opacity: 0 }}
          whileInView={{
            position: "relative",
            top: 0,
            opacity: 1,
          }}
          className='product-head'
        >
          <h3>Our Product Range</h3>
          <p>
            100% Cotton Handloom / Power loom made-ups & Fabrics of Dyed,
            Printed, Woven & Jacquard.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='sample-image'
        >
          <img src={product5} />
        </motion.div>
        <h3 className='product-list-title'>Our Product List</h3>
        <div className='product-image-flex'>
          <MediaCover />
        </div>
      </div>
    </div>
  );
}
export default Products;
