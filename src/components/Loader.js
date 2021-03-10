import { motion } from "framer-motion";

const loaderVariants = {
  one: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="loader"
      variants={loaderVariants}
      animate="one"
    ></motion.div>
  );
};

export default Loader;
