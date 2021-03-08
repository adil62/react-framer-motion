import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  start: { opacity: 0, x: "100vw" },
  end: { opacity: 1, x: 0, transition: { type: "spring", delay: 0.5 } },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "tween" }}
          className="next"
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
