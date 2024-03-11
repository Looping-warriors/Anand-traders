import React from "react";
import { motion } from "framer-motion";
import slide1 from "../../Assets/main.jpg";
import structure from "../../Assets/company.jpeg";
import "../../css/Home.css";
import UIkit from "uikit";
import { FaAngleDoubleDown } from "react-icons/fa";

function Home() {
  window.scrollTo(0, 0);

  const pageDurationTwo = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "20px",
    },
  };
  const pageTransitionTwo = {
    duration: 1,
  };

  return (
    <div className='home'>
      <motion.div
        className='uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex slide-image'
        initial='out'
        animate='in'
        exit='out'
        variants={pageDurationTwo}
        transition={pageTransitionTwo}
      >
        {/* <img src={slide1} /> */}
        <div
          className='uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical slider-image-content'
          uk-parallax='start: 100%; end: 100%; sepia: 100;'
        >
          <h1 uk-parallax='opacity: ,1,1; y: -100,0,0; x: 100,100,0; scale: 5,3,1; end: 30vh'>
            <span>ANAND</span> TRADERS
          </h1>
          <p uk-parallax='start: 30vh; opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,2,1; end: 30vh'>
            Our Products are 100% Cotton home furnishing textiles madeups.
          </p>
        </div>
        <div className='scroll-down-btn'>
          <span>Scroll Down</span>
          <FaAngleDoubleDown size={50} />
        </div>
      </motion.div>
      {/* <Button>hello</Button> */}
      <div className='home-mid-content'>
        <div
          className='mid-content-left'
          uk-sticky='end: #end-sticky ;uk-height-large; offset: 100'
        >
          <img src={structure} />
        </div>

        <div className='mid-content-right'>
          <div
            className='home-profile'
            id='end-sticky'
          >
            <div className='container'>
              <motion.div
                className='home-profile-content'
                initial={{ position: "relative", top: 200, opacity: 0 }}
                whileInView={{
                  position: "relative",
                  top: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
              >
                <h3 className='home-profile-title'>Welcome to Anand Traders</h3>
                <p>
                  Established in 1989 by R. Kasthuri, Anand Traders specializes
                  in crafting top-quality 100% cotton home furnishing textiles
                  in Karur, a leading hub in South India. Committed to timely
                  delivery, our products from Selvan Traders reflect a
                  dedication to quality craftsmanship with direct control over
                  manufacturing processes.
                </p>
              </motion.div>
              <motion.div
                className='home-profile-content'
                initial={{ position: "relative", top: 200, opacity: 0 }}
                whileInView={{
                  position: "relative",
                  top: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
              >
                <h3 className='home-profile-title'>
                Our Distinctive Achievements
                </h3>
                <p>
                  Explore our diverse collection of table linens and kitchen
                  textiles, featuring classic, traditional, and contemporary
                  designs for every occasion. We prioritize design, innovation,
                  prompt delivery, and affordability. Committed to excellent
                  customer service, we work closely with you, providing valuable
                  insights and assistance whenever needed.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-profile-content'>
        <h3 className='home-profile-title'>Certificates</h3>
        <ul>
          <li>SA 8000</li>
          <li>Social Audit for Ross</li>
          <li>SOCIAL AUDIT FOR TJX</li>
          <li>GOTS CERTIFICATE</li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
