import React from "react";
import "./loader.scss";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import LogoImage from "../../assets/images/logo.gif";
export default function Loader() {
  return (
    <div>
      <motion.div
        className="custom-loader-design"
        initial={{ y: "100vh" }}
        animate={{ y: "0" }}
        transition={{
          duration: 1.3,
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
            }}
            className="logo-center-alignment"
          >
            <img src={LogoImage} alt="LogoImage" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
