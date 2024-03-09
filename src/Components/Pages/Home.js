import React from "react";
import { motion } from "framer-motion";
import slide1 from "../../Assets/main.jpg";
import structure from "../../Assets/company.jpeg";
import "../../css/Home.css";

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
        className='slide-image'
        initial='out'
        animate='in'
        exit='out'
        variants={pageDurationTwo}
        transition={pageTransitionTwo}
      >
        <img src={slide1} />
      </motion.div>
      {/* <Button>hello</Button> */}
      <div className='home-mid-content'>
        <div className='mid-content-left'>
          <img src={structure} />
        </div>
        <div className='mid-content-right'>
          {/* <Blockquote
            color='blue'
            cite=''
            mt='xl'
          > */}
          <p className='mid-content-para'>
            “Quality is never an accident; it is always the result of high
            intention, sincere effort, intelligent direction <br /> and skillful
            execution; it represents the wise choice of many alternatives.”
          </p>
          <h3 className='mid-content-name'>William A. Foster</h3>
          {/* </Blockquote> */}
        </div>
      </div>
      <div className='home-profile'>
        <div className='container'>
          <div className='home-profile-content'>
            <h3 className='home-profile-title'>Welcome to Anand Traders</h3>
            <p>
              Anand Traders Located at Karur is one of the major Textiles
              manufacturing and exporter especially home furnishing textiles in
              South India. Our primary focus remains timely delivery to our
              clients at all times. A products from Selvan traders comes with
              the promise of quality workmenship. We have direct control over
              the processes.
            </p>
          </div>
          <div className='home-profile-content'>
            <h3 className='home-profile-title'>COMPANY'S PROFILE</h3>
            <p>
              Anand Traders is Established in 1989 by R.Kasthuri our Beloved
              Owner. Our Products are 100% Cotton home furnishing textiles
              madeups.
            </p>
          </div>
          <div className='home-profile-content'>
            <h3 className='home-profile-title'>HIGHLIGHTS OF OUR COMPANY</h3>
            <p>
              We are proud to offer a fantastic and varieties of table linen and
              kitchen textiles. We offer products suitable for all occasions and
              provide an extensive choice of classic, traditional and
              contemporary designs. We place great importance on design and
              innovation, prompt delivery, Quality products at prices suitable
              for all retailers and above all good customer service. We work
              closely with our customers and we are always available to share
              our experience whenever help and advice is needed.
            </p>
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
      </div>
    </div>
  );
}
export default Home;
