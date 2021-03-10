import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const modalVariant = {
  initial: { y: "-100vh", opacity: 0 },
  animate: { y: "200px", opacity: 1 },
  transition: { delay: 0.5 },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdropVariant}
          animate="animate"
          initial="initial"
          exit="initial"
          className="backdrop"
        >
          <motion.div
            className="modal"
            variants={modalVariant}
            animate="animate"
            initial="initial"
          >
            <p>want to make another pizza ?</p>
            <Link to="/">
              <button>Start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
