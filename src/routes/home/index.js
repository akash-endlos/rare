import React, { useEffect, useState } from "react";
import "./home.scss";
import Slider from "react-slick";
import FirstSection from "./firstSection";
import SecSection from "./secSection";
import ContactSection from "./contactSection";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import About from "../about";
import { useTranslation } from "react-i18next";
export default function Home() {
  const [openModal, setOpenModal] = useState(true);
  const { t } = useTranslation()
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
              <p>{t('open_mail')} ?</p>
              <button className="open-box-btn">{t('cancel')}</button>
              <button className="open-box-btn">{t('open')}</button>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
