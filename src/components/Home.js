import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px 8px rg(255,255,255)",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
