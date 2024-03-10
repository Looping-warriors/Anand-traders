import React from "react";
import "../../css/About.css";
import { TbTruckDelivery } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import { IoMdPricetags } from "react-icons/io";
import { MdHighQuality } from "react-icons/md";
import image1 from "../../Assets/Slide/slide4.jpg";
import author from "../../Assets/pradeepdp.jpg";
import author2 from "../../Assets/DSC_0780.jpg";
import { motion } from "framer-motion";
function About() {
  window.scrollTo(0, 0);

  const services = [
    {
      title: "On Time Delivery",
      content:
        "Our products & services to the buyers through time delivery &enhancing customers satisfaction",
      duration: "",
    },
    {
      title: "Satisfied Customers",
      content:
        "Since the inception of our firm, we are focused on maintaining the trust and enhancing Customers Satisfaction.",
      duration: "",
    },
    {
      title: "Competitive Price",
      content:
        "Our company’s biggest agenda is to give a competitive price against our competitors.",
      duration: "",
    },
    {
      title: "Product Quality Analysis",
      content:
        "All our organized and sustained efforts are driven towards providing the customers.",
      duration: "",
    },
  ];

  return (
    <div className='about'>
      <div className='about-head'>
        <motion.div
          initial={{ position: "relative", top: 200, opacity: 0 }}
          whileInView={{ position: "relative", top: 0, opacity: 1 }}
          viewport={{ once: true }}
          className='container'
        >
          <h3>Why Choose Us</h3>
          <p>
            We Have 23 Years of Experience in Exporting. We are highly confident
            in our promise to give you better. Our focus is to build long term
            relationships with our customers, not simply a quick sale!
          </p>
        </motion.div>
      </div>
      <div className='home-service-card-flex'>
        {services.map((data, index) => {
          return (
            <motion.div
              key={index}
              initial={{ position: "relative", top: 200, opacity: 0 }}
              whileInView={{
                position: "relative",
                top: 0,
                opacity: 1,
                transition: { duration: index, ease: "linear" },
              }}
              viewport={{ once: true }}
              class='service-card'
            >
              <div class='service-content'>
                <p class='heading'>{data.title}</p>
                <p class='para'>{data.content}</p>
                <button class='btn'>Read more</button>
              </div>
            </motion.div>
          );
        })}

        {/* <div className='card-one'>
          <TbTruckDelivery className='app-logo' />
          <h4 className='service-card-title'>On Time Delivery</h4>
          <p className='service-card-content'>
            Our products & services to the buyers through time delivery &
            enhancing customers satisfaction
          </p>
        </div>
        <div className='card-two'>
          <HiUserGroup className='app-logo' />
          <h4 className='service-card-title'>Satisfied Customers</h4>
          <p className='service-card-content'>
            Since the inception of our firm, we are focused on maintaining the
            trust and enhancing Customers Satisfaction.
          </p>
        </div>
        <div className='card-three'>
          <IoMdPricetags className='app-logo' />
          <h4 className='service-card-title'>Competitive Price</h4>
          <p className='service-card-content'>
            Our company’s biggest agenda is to give a competitive price against
            our competitors.
          </p>
        </div>
        <div className='card-four'>
          <MdHighQuality className='app-logo' />
          <h4 className='service-card-title'>Product Quality</h4>
          <p className='service-card-content'>
            All our organized and sustained efforts are driven towards providing
            the customers.
          </p>
        </div> */}
      </div>
      <div className='quality-team'>
        <div className='quality-left'>
          <img src={image1}></img>
        </div>
        <div className='quality-content'>
          <h3 className='quality-title'>Q A & Supervisors Team</h3>
          <p className='quality-content'>
            Each and every piece of the products has come across several stages
            under the vigilant, supervisions of our Q.A. Team. Hopefully the
            same can be noticed on the pictures
          </p>
        </div>
      </div>
      <div className='owner-card-flex'>
        <div class='owner-card'>
          <img
            src={author}
            className='image'
          />

          <div class='owner-card-info'>
            <span>George Johnson</span>
            <p>Support Specialist</p>
          </div>
          <a
            href='#'
            class='button'
          >
            Follow
          </a>
        </div>
        <div class='owner-card'>
          <img
            src={author2}
            className='image'
          />
          <div class='owner-card-info'>
            <span>George Johnson</span>
            <p>Support Specialist</p>
          </div>
          <a
            href='#'
            class='button'
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
