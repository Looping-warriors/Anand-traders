import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import "../css/Footer.css";
function Footer() {
  return (
    <div className="footer-main">
      <div className="Footer">
        <div className="footer-left-one">
          <h4 className="footer-title">Anand Traders</h4>
          <p className="footer-paragraph">
            Anand Traders Located at Karur is one of the major Textiles
            manufacturing and exporter especially home furnishing textiles in
            South India.
          </p>
        </div>
        <div className="footer-left">
          <h4 className="footer-title">Address</h4>
          <div className="footer-right-one">
            <p className="footer-para">Anand Traders</p>
            <p className="footer-para">
              10-A Valluvar Street , Karur – 639001.
            </p>
            <p className="footer-para">Tamil Nadu , India</p>
          </div>
        </div>
        <div className="footer-middle">
          <h4 className="footer-title">Company</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about ">About Us</Link>
            </li>
            <li>
              <Link to="/process">Process</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-middle-two">
          <h4 className="footer-title">Location</h4>
          <iframe
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=10-A Valluvar Street, Karur – 639001, Tamilnadu , India.&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="horizontal-line" />
        <div className="social-links">
          <div>
            <AiFillFacebook className="social-icons" />
            <AiFillTwitterCircle className="social-icons" />
            <AiFillInstagram className="social-icons" />
            <AiFillLinkedin className="social-icons" />
            <AiFillGoogleCircle className="social-icons" />
          </div>
        </div>
        <p className="copyright">
          @Copyright. All rights reserved. Designed by
          <a href="http://interdeccaan.in/" target="-blank">
            {" "}
            Inter Deccaan Solutions
          </a>
        </p>
      </div>
    </div>
  );
}
export default Footer;
