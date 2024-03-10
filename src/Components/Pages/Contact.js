import React from "react";
import "../../css/Contact.css";
import { motion } from "framer-motion";

function Contact() {
  window.scrollTo(0, 0);

  return (
    <div className='contact'>
      <motion.div
        initial={{ position: "relative", right: 200, opacity: 0 }}
        whileInView={{
          position: "relative",
          right: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "linear" },
        }}
        viewport={{ once: true }}
        className='contact-left-flex'
      >
        <form className='enquiry-form'>
          <div className='enquiry'>
            <h3>For Enquiry</h3>
            <div className='input-div'>
              <label>Full Name</label>
              <br />
              <input
                type='text'
                placeholder='Your Name'
              ></input>
            </div>
            <div className='input-div'>
              <label>Mail Address</label>
              <br />
              <input
                type='mail'
                placeholder='Your Mail'
              ></input>
            </div>
            <div className='input-div'>
              <label>Enquiry</label>
              <br />
              <textarea
                className='enquiry-desc'
                type='text'
                placeholder='Your Enquiry'
              ></textarea>
            </div>
            <div className='submit-btn'>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial={{ position: "relative", left: 200, opacity: 0 }}
        whileInView={{
          position: "relative",
          left: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "linear" },
        }}
        viewport={{ once: true }} className='contact-right-flex'>
        <div className='contact-right-flex-content'>
          <h3>Contact Us</h3>
          <div className='contact-section'>
            <h4>Anand Traders</h4>
            <p>10-A Valluvar Street, Karur – 639001, Tamilnadu , India.</p>
          </div>
          <div className='contact-section'>
            <h4>Phone Number</h4>
            <p>Mr. R.Selvan - +91-9843056449</p>
            <p>Mr. P.R.Anand - +91-9443268449</p>
          </div>
          <h4>Email Id</h4>
          <p>selvan@selvantex.com</p>
          <p>anand@selvantex.com</p>
        </div>
      </motion.div>
    </div>
  );
}
export default Contact;
