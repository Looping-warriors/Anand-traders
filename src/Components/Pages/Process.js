import React from "react";
import "../../css/Process.css";
import image1 from "../../Assets/process/1.jpeg";
import image2 from "../../Assets/process/2.jpeg";
import image3 from "../../Assets/process/3.jpeg";
import image4 from "../../Assets/process/5.jpeg";
import image5 from "../../Assets/process/6.jpeg";
import image6 from "../../Assets/process/7.jpeg";
import image7 from "../../Assets/process/8.jpeg";
import image8 from "../../Assets/process/9.jpeg";
import image9 from "../../Assets/process/10.jpeg";
import { motion } from "framer-motion";

function Process() {
  window.scrollTo(0, 0);

  const data = [
    {
      icon: image1,
      title: "Grey Yarn",
      content:
        " Initially we are buying the yarn from the Mill sector in various counts of 2/20s,2/30s,2/40s, and 10s,2s,6s. and many other counts",
    },
    {
      icon: image2,
      title: "Loading Yarn",
      content:
        " After getting the yarn from the mills then we are loading the yarns in different kind of capacity machine like 20bundles,40 bundles up to 100 bundles. Each bundles having the weight of 5kgs",
    },
    {
      icon: image3,
      title: "Dyeing",
      content:
        "We ensure all our products conform to the latest ECO Friendly Specifications. We use cabinet, Reactive hank dyeing units with the capacity of 2.0 tons per day. Also we use only AZO free dyes for our processes and the raw materials complies with the higher quality and colour fastness standard.",
    },
    {
      icon: image4,
      title: "Dyed Yarn",
      content:
        "After loading the grey yarn in to the machine then we are matching the colors according to the colors.",
    },
    {
      icon: image5,
      title: "Hydro Extracted",
      content:
        "After finished the dyeing then we take the yarn in hydro extractor for drying the yarn. Then we will put in to the Dryer for quick drying. Then we test in quality lab.",
    },
    {
      icon: image6,
      title: "Quality Lab",
      content: "To check shrinkage, colour fastness, GSM, wet & Dry Rub etc.",
    },
    {
      icon: image7,
      title: "Weaving",
      content:
        "We dedicated weaving units with 500 Looms inclusive of handloom, Power loom, Auto loom Weaves. Our weaving capabilities are scalable and have global brands of machinery to ensure that we deliver a wide range of weaving patterns including satin, Dobby, Twill, Jacquard Weaves.",
    },
    {
      icon: image8,
      title: "Printing",
      content:
        "We provide to a variety of customised needs Inclusing embroidered and printed madeups. Our latest moderns of machinery helps to put Imagination to print in a variety of ways Based on the customer’s requirements.",
    },
    {
      icon: image9,
      title: "Stitching",
      content:
        "In house stitching units with 20 Imported sewing Machines and additional 100 machines under our Disposal.",
    },
  ];

  return (
    <div className='process'>
      <div className='process-head'>
        <div
          className='container'
          initial={{ position: "relative", top: 200, opacity: 0 }}
          whileInView={{
            position: "relative",
            top: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <h3>Process</h3>
          <p>
            We have team of workforce who are closely monitoring with high AQL
            standards right from sampling to shipment with a proactive approach
            enabling to prevent potential problems and ensure timely delivery of
            the finished goods. We have total faith in our diligent and
            disciplined team of professional experts who are helping us to
            supply outstanding products with proper time management.
          </p>
        </div>
      </div>
      <div className='container process-container'>
        <div className='process-method'>
          {data.map((item, index) => (
            <motion.div
              key={index}
              className='process-card'
              style={{
                backgroundImage: `  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.icon})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
              initial={{ position: "relative", top: 200, opacity: 0 }}
              whileInView={{
                position: "relative",
                top: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "linear" },
              }}
              viewport={{ once: true }}
            >
              {/* <div>
                <img src={item.icon}></img>
              </div> */}
              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Process;
