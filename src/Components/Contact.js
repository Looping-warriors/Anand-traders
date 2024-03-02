import React from "react";
import "../css/Contact.css";

function Contact() {
  window.scrollTo(0, 0);

  return (
    <div className="contact">
      <div className="contact-left-flex">
        <div className="enquiry-form">
          <div className="enquiry">
            <h3>For Enquiry</h3>
            <div className="input-div">
              <label>Full Name</label>
              <br />
              <input type="text" placeholder="Your Name"></input>
            </div>
            <div className="input-div">
              <label>Mail Address</label>
              <br />
              <input type="mail" placeholder="Your Mail"></input>
            </div>
            <div className="input-div">
              <label>Enquiry</label>
              <br />
              <input
                className="enquiry-desc"
                type="text"
                placeholder="Your Enquiry"
              ></input>
            </div>
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-right-flex">
        <div>
          <h3>Contact Us</h3>
          <div className="contact-section">
            <h4>Anand Traders</h4>
            <p>10-A Valluvar Street, Karur – 639001, Tamilnadu , India.</p>
          </div>
          <div className="contact-section">
            <h4>Phone Number</h4>
            <p>Mr. R.Selvan - +91-9843056449</p>
            <p>Mr. P.R.Anand - +91-9443268449</p>
          </div>
          <h4>Email Id</h4>
          <p>selvan@selvantex.com</p>
          <p>anand@selvantex.com</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
