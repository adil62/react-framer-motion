import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const buttonVariants = {
  hover: {
    scale: 1.1, // keyframes looping
    boxShadow: "0px 0px 8px 8px rg(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const containerVariants = {
  init: {
    opacity: 0,
  },
  animate: { opacity: 1, transition: { delay: 0.4 } },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        initial="initial"
        animate="animate"
        exit="exit"
        vaiants={containerVariants}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </div>
  );
};

export default Home;
