import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

function IndividualFAQ({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div>
      <motion.div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flow-root my-5 pb-4 border-b-2"
      >
        <motion.h2 className="float-left text-xl font-light">
          {question}
        </motion.h2>
        <AiFillCaretDown
          className={`float-right ${
            open ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500`}
          size={30}
        />
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, scale: 1, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: "auto" }}
            exit={{ opacity: 0, scale: 1, height: 0 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            style={{ originX: 0 }}
            className="paragraph"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default IndividualFAQ;
