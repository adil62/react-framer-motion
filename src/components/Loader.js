import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  one: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
  two: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("one", " two");

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <button onClick={() => cycleAnimation()}>change anim</button>
    </>
  );
};

export default Loader;
