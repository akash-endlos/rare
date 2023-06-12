import React, { useEffect, useState } from "react";
import "./home.scss";
import Slider from "react-slick";
import FirstSection from "./firstSection";
import SecSection from "./secSection";
import ContactSection from "./contactSection";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import About from "../about";
export default function Home() {
  const [openModal, setOpenModal] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "0" }}
        transition={{
          duration: 1.3,
          delay: 2,
        }}
      >
        <div className="main-section">
          {/* <div id="home">
            <FirstSection setOpenModal={setOpenModal} />
          </div> */}
          <div>{/* <SecSection /> */}</div>
          <div id="about">
            <About />
          </div>
          {/* <div id="contact">
            <ContactSection />
          </div> */}

          {openModal && (
            <div className="open-main-box">
              <p>open mail ?</p>
              <button>cancel</button>
              <button>open</button>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
